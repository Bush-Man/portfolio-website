package com.api.api.Entity;

import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class UserEntity {

    @Id
    private String userId;
    private String username;
    private String password;
    private String email;
    @Enumerated(EnumType.STRING)
    private String roles;

    @Column(updatable = false)
    private LocalDateTime dateCreated;

    public UserEntity(String username, String password, String email, LocalDateTime dateCreated) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.dateCreated = dateCreated;

    }

    public UserEntity() {
    }

    public String getUserId() {
        return this.userId;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRoles() {
        return this.roles;
    }

    public void setRoles(String role) {
        this.roles = role;
    }

    @Override
    public String toString() {
        return "UserEntity{"
                + "userId='" + userId + '\''
                + ", username='" + username + '\''
                + ", password='" + password + '\''
                + ", email='" + email + '\''
                + ", email='" + roles + '\''
                + '}';
    }

    public LocalDateTime getdateCreated() {
        return dateCreated;
    }

    public void setdateCreated(LocalDateTime dateCreated) {
        this.dateCreated = dateCreated;
    }

}
