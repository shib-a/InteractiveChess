package org.project.springbot.player;

import jakarta.persistence.*;
import lombok.Data;
import org.project.springbot.user.User;

import java.lang.annotation.Target;
import java.util.Date;

@Entity
@Data
@Table(name = "players")
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(nullable = false)
    private Date creationDate;
    @Column(nullable = false)
    private Integer numberOfMatches;
    @Column(nullable = false)
    private Integer numberOfWins;
    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
}
