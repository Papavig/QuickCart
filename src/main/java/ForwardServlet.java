import java.io.IOException;
import jakarta.servlet.*;
import jakarta.servlet.http.*;

public class ForwardServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Get the parameter value from the request
        String destination = request.getParameter("destination");

        // Check the parameter value and forward accordingly
        if ("products".equals(destination)) {
            request.getRequestDispatcher("Assets/Pages/products.jsp").forward(request, response);
        } else if ("login".equals(destination)) {
            request.getRequestDispatcher("Assets/Pages/login.jsp").forward(request, response);
        } else if ("signup".equals(destination)) {
            request.getRequestDispatcher("Assets/Pages/signup.jsp").forward(request, response);
        } else {
            // Handle other cases or provide a default forward
            response.sendRedirect("index.jsp");
        }
    }
}
