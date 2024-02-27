    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.SQLException;

    public class DbConnection {
        private static final String JDBC_URL = "jdbc:mysql://localhost:3306/quickcart";
        private static final String USER = "root";
        private static final String PASSWORD = "password";

        static {
            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
            } catch (ClassNotFoundException e) {
                throw new RuntimeException(e);
            }
        }

        public static Connection getConnection() throws SQLException {
            return DriverManager.getConnection(JDBC_URL, USER, PASSWORD);
        }
    }
