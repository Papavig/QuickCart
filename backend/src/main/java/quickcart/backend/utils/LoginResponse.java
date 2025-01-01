package quickcart.backend.utils;

public class LoginResponse {
    private String username;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public LoginResponse(String username) {
        this.username = username;
    }
}
