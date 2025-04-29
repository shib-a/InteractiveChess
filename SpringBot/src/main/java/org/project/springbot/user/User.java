package org.project.springbot.user;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    Long id;
    @Column(nullable = false)
    String username;
    @Column(nullable = false)
    Date creationDate;
    @Column(nullable = false)
    Integer numberOfMatches;
    @Column(nullable = false)
    Integer numberOfWins;
}
