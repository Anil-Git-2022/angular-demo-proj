import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { post } from '../post.model';
import { PostService } from '../post.service';
@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {

  form! : FormGroup;

  constructor(private PostService : PostService,private Router : Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      title : new FormControl(null,[Validators.required,Validators.maxLength(20)]),
      description : new FormControl(null,[Validators.required]),
      imagepath : new FormControl(null,[Validators.required])
    })
  }

  OnSubmit(){
    console.log("I have Clicked")
    console.log(this.form)

    const title =  this.form.value.title;
    const description = this.form.value.description;
    const imagepath = this.form.value.imagepath;


    ///Ready With the Object
    const Post : post = new post(
      title,
      "test@test.com",
      imagepath,
      "06-09-2021",
      description
    );

    this.PostService.addpost(Post)
    this.Router.navigate(['/post-list'])
    
  }

}
