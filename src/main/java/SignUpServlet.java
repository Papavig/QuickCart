import java.io.*;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.sql.*;

public class SignUpServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        // Retrieving user inputs from the signup form
        String firstName = request.getParameter("firstName");
        String lastName = request.getParameter("lastName");
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        String confirmPassword = request.getParameter("confirmPassword");
        String address = request.getParameter("address");
        String city = request.getParameter("city");

        // Validate if passwords match and are not null
//        if (password == null || !password.equals(confirmPassword)) {
//            out.println("<script>alert('Passwords do not match or are null. Please try again.'); window.location='ForwardServlet?destination=signup';</script>");
//            return;
//        }

        try {
            // Assuming you have a method to get the database connection
            Connection con = DbConnection.getConnection();
            Statement stmt = con.createStatement();

            // Query to insert new user into the QuickCart_users table
            String insertQuery = "INSERT INTO QuickCart_users(name, email, password, address, city) VALUES ('" + firstName + " " + lastName + "', '" + email + "', '" + password + "', '" + address + "', '" + city + "')";

            int rowsAffected = stmt.executeUpdate(insertQuery);

            if (rowsAffected > 0) {
                // Signup successful
                out.println("<script>alert('Signup successful!'); window.location='ForwardServlet?destination=login';</script>");
            } else {
                // Signup failed
                out.println("<script>alert('Signup failed. Please try again.'); window.location='ForwardServlet?destination=signup';</script>");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}