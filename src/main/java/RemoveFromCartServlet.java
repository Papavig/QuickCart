import java.io.IOException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.util.List;
import java.util.Map;

@WebServlet("/RemoveFromCartServlet")
public class RemoveFromCartServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Get the index of the item to be removed from the request
        int index = Integer.parseInt(request.getParameter("index"));

        // Retrieve the cart from the session
        List<Map<String, Object>> cart = (List<Map<String, Object>>) request.getSession().getAttribute("cart");

        // Check if cart exists and index is valid
        if (cart != null && index >= 0 && index < cart.size()) {
            // Remove the item from the cart
            cart.remove(index);

            // Update the cart in the session
            request.getSession().setAttribute("cart", cart);
        }

        // Redirect back to the cart page
        response.sendRedirect("ForwardServlet?destination=cart");
    }
}
