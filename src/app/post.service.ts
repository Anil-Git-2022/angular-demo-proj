import { Injectable } from "@angular/core";
import { post } from "./post.model";

@Injectable({providedIn : 'root'}) //Identified as service

export class PostService{

    listofPosts : post[] = [
        new post(
          "First Title",
          "My Author",
          "/assets/nature.jpg",
          "20-06-2002",
          "Demo Description",
        ),
        new post(
          "Second Title",
          "My Author",
          "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
          "20-06-2002",
          "Demo Description",
        ),
        new post(
          "Third  Title",
          "My Author",
          "/assets/demo.jpg",
          "20-06-2002",
          "Demo Description",
        ),
        new post(
          "Fourth Title",
          "My Author",
          "/assets/demo2.jpg",
          "20-06-2002",
          "Demo Description",
        )
      ];

      getPosts(){
          return this.listofPosts
      }
      deletePost(index : number){
          this.listofPosts.splice(index,1)
      }
      addpost(post : post){
        this.listofPosts.push(post)
      }
      EditPost(index : number,post : post){
          this.listofPosts[index] = post
      }

      getSinglePost(index : number){
        return this.listofPosts[index]
      }

      setPosts(listOfPosts : post[]){
        this.listofPosts = listOfPosts
      }

}