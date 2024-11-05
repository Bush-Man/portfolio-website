package com.api.api.services;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.api.api.Entity.ProjectEntity;
import com.api.api.repository.ProjectsRepository;

@Service
public class ProjectsServices {

    private final ProjectsRepository projectsRepository;
    
    public ProjectsServices(ProjectsRepository projectsRepository) {
        this.projectsRepository = projectsRepository;
    }

    @SuppressWarnings({ "unchecked", "rawtypes" })
    public ResponseEntity<List<ProjectEntity>> getProjects() {
    try {
        List<ProjectEntity> projects = projectsRepository.findAll();
        if (projects.isEmpty()) {
            return new ResponseEntity("No projects found", HttpStatus.NOT_FOUND);  
        } else {
            return new ResponseEntity<>(projects, HttpStatus.OK);
        }
    } catch (Exception e) {
        return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

    @SuppressWarnings({ "rawtypes", "unchecked", "unused" })
    public ResponseEntity<ProjectEntity> createProject(ProjectEntity projectEntity) {
        ProjectEntity newProject  = new ProjectEntity();
        newProject.setGithubUrl(projectEntity.getGithubUrl());
        newProject.setProjectDescription(projectEntity.getProjectDescription());
        newProject.setProjectTitle(projectEntity.getProjectTitle());
        newProject.setTechStack(projectEntity.getTechStack());
        newProject.setImageUrl(projectEntity.getImageUrl());
        newProject.setWebUrl(projectEntity.getWebUrl());
       try{
        ProjectEntity createdProject = projectsRepository.save(newProject);
        if(createdProject != null){
        return new ResponseEntity<>(createdProject, HttpStatus.CREATED);
        }
        else{
            return new ResponseEntity("Please try again", HttpStatus.BAD_REQUEST);
        }
       }catch(Exception e){
           return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
       }

    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public ResponseEntity<ProjectEntity> getProjectById(String id) {
     try{
    Optional<ProjectEntity> project = projectsRepository.findById(id);
    if(project.isPresent()) {
        return new ResponseEntity<>(project.get(), HttpStatus.OK);
    
    }else{
        return new ResponseEntity("Project not found", HttpStatus.NOT_FOUND);
    }       
    }catch(Exception e){
       return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
   
    
    }
}