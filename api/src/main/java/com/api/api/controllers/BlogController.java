package com.api.api.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.api.api.Entity.BlogEntity;
import com.api.api.services.BlogService;

@RestController
public class BlogController {
    private final BlogService blogService;

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    
    @GetMapping("/blogs")
    public ResponseEntity<List<BlogEntity>> getBlogs() {
        return blogService.getBlogs();
    }
    @PostMapping("/new-blog")
    public ResponseEntity<BlogEntity> createBlog(@RequestBody BlogEntity blogEntity) {
        return blogService.createBlog(blogEntity);
    }
    @GetMapping("/blogs/{id}")
    public ResponseEntity<BlogEntity> getBlogById(@PathVariable String id) {
        return blogService.getBlogById(id);
        
    }
    

    
}
