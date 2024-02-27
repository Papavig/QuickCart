import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.sql.*;
import java.util.*;

public class OrderServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String action = request.getParameter("action");

        if ("checkout".equals(action)) {
            processCheckout(request, response);
        } else {
            addToCart(request, response);
        }
    }

    private void addToCart(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int productId = Integer.parseInt(request.getParameter("product_id"));
        int userId = retrieveUserIdFromSession(request);

        // Retrieve product details from the database based on productId
        String productName = "";
        double price = 0.0;
        try (Connection connection = DbConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement("SELECT product_name, price FROM QuickCart_products WHERE product_id = ?")) {

            statement.setInt(1, productId);
            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                productName = resultSet.getString("product_name");
                price = resultSet.getDouble("price");
            }

        } catch (SQLException e) {
            e.printStackTrace();
            // Handle database error
            response.sendRedirect("error.jsp");
            return;
        }

        // Create a map to store product details
        Map<String, Object> productDetails = new HashMap<>();
        productDetails.put("productId", productId);
        productDetails.put("productName", productName);
        productDetails.put("price", price);
        productDetails.put("quantity", 1); // Assuming quantity is 1 for now

        // Retrieve the cart from the session
        HttpSession session = request.getSession(true); // Create a new session if it doesn't exist
        List<Map<String, Object>> cart = (List<Map<String, Object>>) session.getAttribute("cart");

        // If the cart doesn't exist in the session, create a new one
        if (cart == null) {
            cart = new ArrayList<>();
        }

        // Add the product details to the cart
        cart.add(productDetails);

        // Update the cart in the session
        session.setAttribute("cart", cart);

        response.sendRedirect("ForwardServlet?destination=cart");
    }

    private int retrieveUserIdFromSession(HttpServletRequest request) {
        HttpSession session = request.getSession(false);

        if (session != null) {
            Object emailAttribute = session.getAttribute("loggedInUser");

            if (emailAttribute instanceof String) {
                String email = (String) emailAttribute;
                return retrieveUserIdByEmail(email);
            }
        }

        return -1;
    }

    private int retrieveUserIdByEmail(String email) {
        try (Connection connection = DbConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement("SELECT user_id FROM QuickCart_users WHERE email = ?")) {

            statement.setString(1, email);
            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                return resultSet.getInt("user_id");
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return -1;
    }

    private void processCheckout(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int userId = retrieveUserIdFromSession(request);
        PrintWriter out = response.getWriter();

        try (Connection connection = DbConnection.getConnection()) {
            List<Map<String, Object>> cart = (List<Map<String, Object>>) request.getSession().getAttribute("cart");

            if (cart != null && !cart.isEmpty()) {
                try (PreparedStatement statement = connection.prepareStatement("INSERT INTO QuickCart_orders (user_id, product_id, order_date) VALUES (?, ?, CURRENT_TIMESTAMP)")) {
                    connection.setAutoCommit(false);

                    for (Map<String, Object> product : cart) {
                        int productId = (int) product.get("productId");
                        statement.setInt(1, userId);
                        statement.setInt(2, productId);
                        statement.addBatch();
                    }

                    int[] rowsAffected = statement.executeBatch();
                    connection.commit();

                    if (Arrays.stream(rowsAffected).allMatch(i -> i > 0)) {
                        // Clear the cart after successful checkout
                        clearCart(userId);
                        out.println("<script>alert('Order Placed.'); window.location='ForwardServlet';</script>");
                    } else {
                        response.sendRedirect("error.jsp");
                    }
                } catch (SQLException e) {
                    connection.rollback();
                    e.printStackTrace();
                    response.sendRedirect("error.jsp");
                } finally {
                    connection.setAutoCommit(true);
                }
            } else {
                // Handle empty cart
                response.sendRedirect("error.jsp");
            }
        } catch (SQLException e) {
            e.printStackTrace();
            response.sendRedirect("error.jsp");
        }
    }

    private void clearCart(int userId) {
        try (Connection connection = DbConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement("DELETE FROM QuickCart_cart_items WHERE user_id = ?")) {

            // Set parameter for the statement
            statement.setInt(1, userId);

            // Execute the statement
            statement.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
