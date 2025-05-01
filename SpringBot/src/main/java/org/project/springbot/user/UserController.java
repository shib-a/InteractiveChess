package org.project.springbot.user;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@Tag(name = "User API", description = "Operations related to a user's account and credentials")
public class UserController {
    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @RequestMapping("/all")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @Operation(summary = "Register a new user")
    @RequestMapping("/register")
    public ResponseEntity<?> addUser(@Valid @RequestBody UserDTO userDTO){
        try{
            userService.addUser(userDTO);
            return ResponseEntity.ok("User registered");
        } catch (Exception e){
            return ResponseEntity.badRequest().body("Invalid user data");
        }
    }


}
