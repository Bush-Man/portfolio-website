package com.api.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.api.api.Entity.ProjectEntity;
@Repository
public interface ProjectsRepository  extends MongoRepository<ProjectEntity,String>{
    
}
