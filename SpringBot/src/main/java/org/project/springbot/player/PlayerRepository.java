package org.project.springbot.player;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.util.Streamable;

public interface PlayerRepository extends JpaRepository<Player, Long> {

}
