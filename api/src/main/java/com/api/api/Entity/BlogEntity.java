package com.api.api.Entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="blogs")
public class BlogEntity {
   
    @Id
    private String blogId;
    private String title;
    private String description;
    private String category;
    private Date createdAt;
    private String imageURL;
    
    public BlogEntity(String title, String description, String category,String imageURL) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.createdAt = new Date(System.currentTimeMillis());
        this.imageURL=imageURL;

    }
    public BlogEntity(){}
    public String getBlogId() {
        return blogId;
    }
    public String getTitle() {
        return title;
    }
    public String getDescription() {
        return description;
    }
    public String getCategory() {
        return category;
    }
    public Date getCreatedAt() {
        return createdAt;
    }
    public String getImageURL() {
        return imageURL;
    }
    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;

    }
    public void setCategory(String category) {
        this.category = category;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    
    
}
