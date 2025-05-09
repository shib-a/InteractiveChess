package org.project.springbot.user;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.util.Streamable;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
//    Streamable<User> findUsersByUsername(String username, Pageable pageable);
    Optional<User> findUserByUsername(String username);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
}
