package com.api.api.controllers;

import org.springframework.web.bind.annotation.RestController;

import com.api.api.Entity.ProjectEntity;
import com.api.api.services.ProjectsServices;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class ProjectsController {
    private final ProjectsServices projectsServices;

    public ProjectsController(ProjectsServices projectsServices) {
        this.projectsServices = projectsServices;
    }

    @GetMapping("/projects")
    public ResponseEntity<List<ProjectEntity>> getProjects() {
        return projectsServices.getProjects();
    }
    @PostMapping("/new-project")
    public ResponseEntity<ProjectEntity> createProject(@RequestBody ProjectEntity projectEntity) {
        System.out.println(projectEntity.getGithubUrl());
        return projectsServices.createProject(projectEntity);
    }
    @GetMapping("/projects/{id}")
    public ResponseEntity<ProjectEntity> getProjectById(@PathVariable String id) {
        return projectsServices.getProjectById(id);
        
    }
    
    
    
    

}
