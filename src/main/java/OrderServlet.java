import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.sql.*;

public class OrderServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Retrieve the product_id parameter from the request
        String productIdParam = request.getParameter("product_id");

        // Validate the productIdParam (you may need to add more robust validation)
        int productId = -1;
        if (productIdParam != null && !productIdParam.isEmpty()) {
            try {
                productId = Integer.parseInt(productIdParam);
            } catch (NumberFormatException e) {
                // Handle the case where product_id is not a valid integer
                response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Invalid product_id");
                return;
            }
        }

        // Retrieve the user_id from the session (you need to manage user sessions in your application)
        int userId = retrieveUserIdFromSession(request);

        // Process the order based on the product ID and user ID using processOrder method
        boolean orderProcessed = processOrder(userId, productId);

        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<html><head><title>Order Status</title></head><body>");

        if (orderProcessed) {
            // Send a success response with a script for showing a pop-up
            out.println("<script>alert('Order placed successfully!');</script>");
        } else {
            // Send an error response with a script for showing a pop-up
            out.println("<script>alert('Error placing the order. Please try again.');</script>");
        }

        out.println("</body></html>");
    }

    private int retrieveUserIdFromSession(HttpServletRequest request) {
        // Get the session from the request
        HttpSession session = request.getSession(false); // Do not create a new session if it doesn't exist

        if (session != null) {
            // Retrieve the email attribute from the session
            Object emailAttribute = session.getAttribute("loggedInUser");

            // Check if the email attribute exists in the session
            if (emailAttribute instanceof String) {
                String email = (String) emailAttribute;

                // Assuming you have a method to get the user ID from the database based on email
                return retrieveUserIdByEmail(email);
            }
        }

        // If the session or email attribute is not found, return a default value or handle accordingly
        return -1; // You might choose to return a special value to indicate an unauthenticated state
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
            // Log the exception using a logging framework
            e.printStackTrace();
        }

        return -1;
    }

    private boolean processOrder(int userId, int productId) {
        try (Connection connection = DbConnection.getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(
                     "INSERT INTO QuickCart_orders (user_id, product_id) VALUES (?, ?)")) {

            preparedStatement.setInt(1, userId);
            preparedStatement.setInt(2, productId);

            // Logging for debugging
            System.out.println("Attempting to insert order: userId=" + userId + ", productId=" + productId);

            int rowsAffected = preparedStatement.executeUpdate();

            // Logging for debugging
            System.out.println("Rows affected: " + rowsAffected);

            return rowsAffected > 0;

        } catch (SQLException e) {
            // Log the exception for further analysis
            e.printStackTrace();
        }

        // Return false to indicate that the order processing failed
        return false;
    }
}