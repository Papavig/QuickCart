    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.SQLException;

    public class DbConnection {
        private static final String JDBC_URL = "jdbc:oracle:thin:@localhost:1521:XE";
        private static final String USER = "system";
        private static final String PASSWORD = "password";

        static {
            try {
                Class.forName("oracle.jdbc.driver.OracleDriver");
            } catch (ClassNotFoundException e) {
                throw new RuntimeException(e);
            }
        }

        public static Connection getConnection() throws SQLException {
            return DriverManager.getConnection(JDBC_URL, USER, PASSWORD);
        }
    }
