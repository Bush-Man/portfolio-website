package com.api.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.api.api.Entity.BlogEntity;

@Repository
public interface BlogRepository extends MongoRepository<BlogEntity,String> {
    
}
