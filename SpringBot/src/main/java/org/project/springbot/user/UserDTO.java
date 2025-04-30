package org.project.springbot.user;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import org.hibernate.validator.constraints.Length;
import org.springframework.lang.NonNull;

@Data
public class UserDTO {
    @NonNull
    @NotBlank
    @Length(max = 20)
    String username;
    @NonNull
    @NotBlank
    @Length(min = 6)
    String password;
}