import java.io.IOException;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class ForwardServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Get the parameter values from the request
        String destination = request.getParameter("destination");
        String filter = request.getParameter("filter");

        // Check the parameter values and forward accordingly
        if ("products".equals(destination)) {
            request.getRequestDispatcher("Assets/Pages/products.jsp").forward(request, response);
        } else if ("login".equals(destination)) {
            request.getRequestDispatcher("Assets/Pages/login.jsp").forward(request, response);
        } else if ("signup".equals(destination)) {
            request.getRequestDispatcher("Assets/Pages/signup.jsp").forward(request, response);
        }else if ("cart".equals(destination)) {
            request.getRequestDispatcher("Assets/Pages/cart.jsp").forward(request, response);}
        else if ("Jackets".equals(filter)) {
            request.getRequestDispatcher("Assets/Pages/Products-filter-item/Jackets.jsp").forward(request, response);
        } else if ("Polo".equals(filter)) {
            request.getRequestDispatcher("Assets/Pages/Products-filter-item/polo.jsp").forward(request, response);
        } else if ("T-shirt".equals(filter)) {
            request.getRequestDispatcher("Assets/Pages/Products-filter-item/tshirt.jsp").forward(request, response);
        } else if ("Bag".equals(filter)) {
            request.getRequestDispatcher("Assets/Pages/Products-filter-item/bag.jsp").forward(request, response);
        } else if ("Shoe".equals(filter)) {
            request.getRequestDispatcher("Assets/Pages/Products-filter-item/shoe.jsp").forward(request, response);
        } else if ("Perfume".equals(filter)) {
            request.getRequestDispatcher("Assets/Pages/Products-filter-item/perfume.jsp").forward(request, response);
        } else {
            // Handle other cases or provide a default forward
            response.sendRedirect("index.jsp");
        }
    }
}
