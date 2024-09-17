package beingvig.quickcartserver.controller;

import beingvig.quickcartserver.entities.LoginRequest;
import beingvig.quickcartserver.entities.LoginResponse;
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
        String username = userService.authenticateUser(loginRequest.getEmail(), loginRequest.getPassword());
        if (username != null) {
            return ResponseEntity.ok(new LoginResponse(username));
        } else {
            return ResponseEntity.status(401).body("Invalid email or password");
        }
    }
}
