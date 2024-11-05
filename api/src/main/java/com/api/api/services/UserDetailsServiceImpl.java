package com.api.api.services;

import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.api.api.Entity.UserEntity;
import com.api.api.Entity.UserEntityInfo;
import com.api.api.repository.UserRepository;


@Service
public class UserDetailsServiceImpl implements UserDetailsService {
 
 
  private UserRepository userRepository;
 
  

public UserDetailsServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
    
    
  }
  

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    Optional<UserEntity> existingUser = Optional.ofNullable(userRepository.findByEmail(email));
    return existingUser.map(UserEntityInfo::new).orElseThrow(()->new UsernameNotFoundException("Username not found:"+ email));
    }
    
  

}
