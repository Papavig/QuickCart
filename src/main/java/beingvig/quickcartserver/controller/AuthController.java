package beingvig.quickcartserver.controller;

import beingvig.quickcartserver.utils.AuthResponse;
import beingvig.quickcartserver.utils.LoginRequest;
import beingvig.quickcartserver.utils.LoginResponse;
import beingvig.quickcartserver.entities.User;
import beingvig.quickcartserver.services.UserService;
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
