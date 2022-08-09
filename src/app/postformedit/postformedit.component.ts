import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { post } from '../post.model';
import { PostService } from '../post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-postformedit',
  templateUrl: './postformedit.component.html',
  styleUrls: ['./postformedit.component.css']
})
export class PostformeditComponent implements OnInit {
  form! : FormGroup;
  index : number = 0

  constructor(private PostService : PostService,private Router : Router,private route : ActivatedRoute) { }

  ngOnInit(): void {
    let title = '';
    let description = '';
    let imagepath = '';
   

    this.route.params.subscribe((params :Params)=>{
      if(params["index"]){
        console.log(params["index"])
        console.log(params)
        this.index = params["index"]
        const post = this.PostService.getSinglePost(this.index)

        title = post.title;
        description = post.description;
        imagepath = post.image_path;
      }
    })

    this.form = new FormGroup({
      title : new FormControl(title,[Validators.required,Validators.maxLength(20)]),
      description : new FormControl(description,[Validators.required]),
      imagepath : new FormControl(imagepath,[Validators.required])
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

    this.PostService.EditPost(this.index,Post)
    this.Router.navigate(['/post-list'])
    
  }

}
