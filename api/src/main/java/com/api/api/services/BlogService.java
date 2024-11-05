package com.api.api.services;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.api.api.Entity.BlogEntity;
import com.api.api.repository.BlogRepository;

@Service
public class BlogService {
    private final BlogRepository blogRepository;

    public BlogService(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }
    
    @SuppressWarnings({ "unchecked", "rawtypes" })
    public ResponseEntity<List<BlogEntity>> getBlogs() {
    try {
        List<BlogEntity> blogs = blogRepository.findAll();
        if (blogs.isEmpty()) {
            return new ResponseEntity("No projects found", HttpStatus.NOT_FOUND);  
        } else {
            return new ResponseEntity<>(blogs, HttpStatus.OK);
        }
    } catch (Exception e) {
        return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

    @SuppressWarnings({ "rawtypes", "unchecked", "unused" })
    public ResponseEntity<BlogEntity> createBlog(BlogEntity blogEntity) {
        BlogEntity newBlog  = new BlogEntity();
        newBlog.setCategory(blogEntity.getCategory());
        newBlog.setTitle(blogEntity.getTitle());
        newBlog.setDescription(blogEntity.getDescription());
        newBlog.setImageURL(blogEntity.getImageURL());

       try{
        BlogEntity createdBlog = blogRepository.save(newBlog);
        if(createdBlog != null){
        return new ResponseEntity<>(createdBlog, HttpStatus.CREATED);
        }
        else{
            return new ResponseEntity("Please try again", HttpStatus.BAD_REQUEST);
        }
       }catch(Exception e){
           return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
       }

    }

    @SuppressWarnings({ "rawtypes", "unchecked" })
    public ResponseEntity<BlogEntity> getBlogById(String id) {
     try{
    Optional<BlogEntity> blog = blogRepository.findById(id);
    if(blog.isPresent()) {
        return new ResponseEntity<>(blog.get(), HttpStatus.OK);
    
    }else{
        return new ResponseEntity("Project not found", HttpStatus.NOT_FOUND);
    }       
    }catch(Exception e){
       return new ResponseEntity(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
   
    
    }
    
}
