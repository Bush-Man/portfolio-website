package com.api.api.securityconfig;

import com.api.api.jwt.JwtAuthenticationFilter;
import com.api.api.services.UserDetailsServiceImpl;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfiguration {
    
    
   
  
    private  JwtAuthenticationFilter jwtAuthFilter;
    
    private UserDetailsServiceImpl userDetailsServiceImpl;

    public SecurityConfiguration(JwtAuthenticationFilter jwtAuthenticationFilter,UserDetailsServiceImpl userDetailsServiceImpl)  {
       this.userDetailsServiceImpl =userDetailsServiceImpl;
        this.jwtAuthFilter = jwtAuthenticationFilter;
        
      
    }

    
    

    

    private final String[] WHITE_LIST_URL = {
            "/register",
            "/login",
            "/projects",
            "/projects/**",
            "/new-project",
            "/new-blog",
            "/about",
            "/resume",
            "/blogs/**",
            "/contact",
            "/blogs",
            "/about",
            "/user/**",
            "/me"
    };

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
      
            return http.csrf(AbstractHttpConfigurer::disable)
        .authorizeHttpRequests(req->
         req.requestMatchers(WHITE_LIST_URL)
         .permitAll()
        )
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider())
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .build();

    }
   
    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();

        authProvider.setUserDetailsService(userDetailsServiceImpl);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
