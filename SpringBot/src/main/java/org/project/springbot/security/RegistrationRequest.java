package org.project.springbot.security;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Schema(description = "Registration request object")
public class RegistrationRequest {
    @NotBlank
    @Size(max = 20, message = "Username must be less than 20 characters")
    @Schema(description = "Username", example = "user123")
    String username;
    @NotBlank
    @Schema(description = "Password", example = "password123")
    @Size(min = 6, max = 255, message = "Password must be at least 6 characters")
    String password;
    @Schema(description="Email", example = "janedoe@gmail.com")
    @NotBlank
    @Size(min=5, max = 255, message = "Email must be between 5 and 255 characters")
    String email;
}
