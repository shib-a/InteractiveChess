package org.project.springbot.user;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    private UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/all")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

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
