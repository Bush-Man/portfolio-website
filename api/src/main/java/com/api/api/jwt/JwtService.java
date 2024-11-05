package com.api.api.jwt;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.api.api.Entity.UserEntityInfo;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {

     String secretKey = "4r1fwpZ4mrHynG7T4bDqZ1Y0qKnQxlBqNeLfY5slZmo=";
    //String encodedKey = Base64.getUrlEncoder().encodeToString(secretKey.getBytes());
    private static final long EXPIRATION_TIME = 1000 * 60 * 60 * 10;

    public String generateToken(UserEntityInfo userEntityInfo) {
        return createToken(userEntityInfo);
    }

    private String createToken(UserEntityInfo userEntityInfo) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("roles", userEntityInfo.getAuthorities());

        return Jwts.builder()
                   .setSubject(userEntityInfo.getEmail())
                   .setClaims(claims)
                   .setIssuedAt(new Date(System.currentTimeMillis()))
                   .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                   .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                   .compact();
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                   .setSigningKey(getSignInKey())
                   .build()
                   .parseClaimsJws(token)
                   .getBody();
    }

    public String getUsernameFromToken(String token) {
        return extractAllClaims(token).getSubject();
    }

    public Date getExpirationDateFromToken(String token) {
        return extractAllClaims(token).getExpiration();
    }

    public boolean isTokenExpired(String token) {
        return getExpirationDateFromToken(token).before(new Date());
    }

    public boolean validateToken(String token, UserDetails userDetails) {
        UserEntityInfo userEntityInfo = (UserEntityInfo) userDetails;
        String username = getUsernameFromToken(token);
        return (username.equals(userEntityInfo.getEmail()) && !isTokenExpired(token));
    }
}
