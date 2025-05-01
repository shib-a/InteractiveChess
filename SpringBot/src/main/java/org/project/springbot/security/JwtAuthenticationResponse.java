package org.project.springbot.security;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Schema(description = "Response with access token")
public class JwtAuthenticationResponse {
    @Schema(name = "Access token", example = "eyJhbGciOiJIUzUxMiJ9...")
    public String token;
}
