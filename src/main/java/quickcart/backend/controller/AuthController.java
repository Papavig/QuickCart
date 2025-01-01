package quickcart.backend.controller;

import quickcart.backend.utils.AuthResponse;
import quickcart.backend.utils.LoginRequest;
import quickcart.backend.utils.LoginResponse;
import quickcart.backend.entities.User;
import quickcart.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        User createdUser = userService.registerUser(user);
        return ResponseEntity.ok(createdUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        AuthResponse authResponse = userService.authenticateUser(loginRequest.getEmail(), loginRequest.getPassword());

        if (authResponse != null) {
            return ResponseEntity.ok(authResponse);
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }
}
