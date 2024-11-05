package com.api.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.api.api.Entity.UserEntity;

@Repository
public interface UserRepository extends MongoRepository<UserEntity,String> {

   UserEntity findByEmail(String email);



}
