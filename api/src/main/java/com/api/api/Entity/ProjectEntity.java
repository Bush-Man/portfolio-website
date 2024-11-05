package com.api.api.Entity;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection ="projects")
public class ProjectEntity {
    
    @Id
    private String projectId;
    private String projectTitle;
    private String projectDescription;
    private Date createdAt;
    private List<String> techStack;
    private String githubUrl;
    private String imageUrl;
    private String webUrl;

    public ProjectEntity( String projectTitle, String projectDescription, List<String> techStack, String githubUrl, String imageUrl, String webUrl ) {
        
        this.projectTitle=projectTitle;
        this.projectDescription=projectDescription;
        this.createdAt=new Date();
        this.techStack=techStack;
        this.githubUrl=githubUrl;
        this.imageUrl=imageUrl;
        this.webUrl=webUrl;

    }
    public ProjectEntity(){}
    public String getProjectId(){
        return projectId;
    }
    public String getProjectTitle(){
        return projectTitle;
    }
    public String getProjectDescription(){
        return projectDescription;
    }
    public Date getCreatedAt(){
        return createdAt;
    }
    public List<String> getTechStack(){
        return techStack;
    }
    public String getGithubUrl(){
        return githubUrl;
    }
    public String getImageUrl(){
        return imageUrl;
    }
    public String getWebUrl(){
        return webUrl;
    }
    // public void setProjectId(String projectId){
    //     this.projectId=projectId;
    // }
    public void setProjectTitle(String projectTitle){
        this.projectTitle=projectTitle;
    }
    public void setProjectDescription(String projectDescription){
        this.projectDescription=projectDescription;
    }
    public void setCreatedAt(Date createdAt){
        this.createdAt=createdAt;
    }
    public void setTechStack(List<String> techStack){
        this.techStack=techStack;
    }
    public void setGithubUrl(String githubUrl){
        this.githubUrl=githubUrl;
    }
    public void setImageUrl(String imageUrl){
        this.imageUrl=imageUrl;
    }
    public void setWebUrl(String webUrl){
        this.webUrl=webUrl;
    }
    @Override
    public String toString() {
        return "ProjectEntity{" +
                "projectId='" + projectId + '\'' +
                ", projectTitle='" + projectTitle + '\'' +
                ", projectDescription='" + projectDescription + '\'' +
                ", createdAt=" + createdAt +
                ", techStack=" + techStack +
                ", githubUrl='" + githubUrl + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", webUrl='" + webUrl + '\'' +
                '}';
    }


    
}
