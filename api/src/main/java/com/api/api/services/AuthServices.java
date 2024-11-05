package com.api.api.services;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import static com.api.api.Entity.Role.USER;
import com.api.api.Entity.UserEntity;
import com.api.api.Entity.UserEntityInfo;
import com.api.api.dtos.LoginRequest;
import com.api.api.dtos.LoginResponse;
import com.api.api.dtos.RegisterDto;
import com.api.api.jwt.JwtService;
import com.api.api.repository.UserRepository;
import com.api.api.securityconfig.SecurityConfiguration;

@Service
public class AuthServices {

    private final UserRepository userRepository;
    private final SecurityConfiguration securityConfig;
    private final JwtService jwtService;

    public AuthServices(UserRepository userRepository, JwtService jwtService, SecurityConfiguration securityConfig) {
        this.userRepository = userRepository;
        this.securityConfig = securityConfig;
        this.jwtService = jwtService;
    }

    public ResponseEntity<?> login(LoginRequest loginRequest) {
        Map<String, String> response = new HashMap<>();
        try {
            UserEntity user = userRepository.findByEmail(loginRequest.getEmail());
            if (user != null) {
                if (securityConfig.passwordEncoder().matches(loginRequest.getPassword(), user.getPassword())) {
                    UserEntityInfo userInfo = new UserEntityInfo(user);
                    LoginResponse loginResponse = new LoginResponse();
                    loginResponse.setUsername(user.getUsername());
                    loginResponse.setEmail(user.getEmail());
                    loginResponse.setUserId(user.getUserId());
                    loginResponse.setToken(jwtService.generateToken(userInfo));
                    return new ResponseEntity<>(loginResponse, HttpStatus.OK);
                } else {
                    response.put("error", "wrong username or password");
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);

                }
            } else {
                response.put("error", "wrong username or password");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
        } catch (Exception e) {
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);

        }
    }

    public ResponseEntity<?> register(RegisterDto registerDto) {

        Optional<UserEntity> existingUser = Optional.ofNullable(userRepository.findByEmail(registerDto.getEmail()));
        Map<String, String> response = new HashMap<>();
        if (!existingUser.isPresent()) {
            UserEntity user = new UserEntity();
            user.setUsername(registerDto.getUsername());
            user.setEmail(registerDto.getEmail());
            user.setRoles(USER.name());
            user.setPassword(securityConfig.passwordEncoder().encode(registerDto.getPassword()));
            user.setdateCreated(LocalDateTime.now());
            userRepository.save(user);
            response.put("message", "Registration Successeful");
            return ResponseEntity.ok(response);
        } else {
            response.put("error", "User already exists.");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        }
    }
}
