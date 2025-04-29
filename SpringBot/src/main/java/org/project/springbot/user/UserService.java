package org.project.springbot.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository, ApplicationContext applicationContext, ApplicationEventPublisher applicationEventPublisher) {
        this.userRepository = userRepository;
    }
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    public Optional<User> getUser(Long id){
        return userRepository.findById(id);
    }
    public void addUser(UserDTO userDTO){

    }
//    public Streamable<User> getUsers() {
//        var res = userRepository.findUsersByUsername("user", Pageable.ofSize(10));
//        Sort.TypedSort<User> user = Sort.sort(User.class);
//        Sort sort = user.by(User::getUsername).descending();
//        Class<User> userClass = User.class;
//        return null;
//    }

}
