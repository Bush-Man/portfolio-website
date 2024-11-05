package com.api.api.dtos;

public class LoginRequest {
   private String email;
   private String password;

   public LoginRequest(String email, String password){
       this.email=email;
       this.password=password;
   }
   public String getEmail(){
       return this.email;
   }
   public String getPassword(){
       return this.password;
   }

    
}
