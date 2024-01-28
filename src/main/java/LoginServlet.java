import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.sql.*;

public class LoginServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        // Retrieving user inputs from the login form
        String email = request.getParameter("email");
        String password = request.getParameter("password");

        try {
            // Assuming you have a method to get the database connection
            Connection con = DbConnection.getConnection();
            Statement stmt = con.createStatement();

            // Query to check if the user with the provided email and password exists
            String loginQuery = "SELECT * FROM QuickCart_users WHERE email='" + email + "' AND password='" + password + "'";

            ResultSet rs = stmt.executeQuery(loginQuery);

            if (rs.next()) {
                // User authenticated
                // You might want to store user information in session for future use
                HttpSession session = request.getSession();
                session.setAttribute("loggedInUser", email);

                // Set a cookie to remember the user
                Cookie userCookie = new Cookie("loggedInUser", email);
                userCookie.setMaxAge(60 * 60 * 24 * 30);
                response.addCookie(userCookie);

                // Redirect to home.jsp
                response.sendRedirect("index.jsp");
            } else {
                // Authentication failed
                out.println("<script>alert('Login failed. Check your email and password.'); window.location='ForwardServlet?destination=login';</script>");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
