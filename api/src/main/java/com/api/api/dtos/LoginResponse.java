package com.api.api.dtos;

public class LoginResponse {


    private String token;
    private String username;
    private String email;
    private String userId;
    public LoginResponse(String token, String username, String email, String userId){
        this.token=token;
        this.username=username;
        this.email=email;
        this.userId=userId;
    }
    
    public LoginResponse(){}
    public String getToken() {
        return token;
    }
    public void setToken(String token) {
        this.token = token;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
}
