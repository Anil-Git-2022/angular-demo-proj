import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post ?:post;
  @Input() index :number=0;

  constructor(private PostService : PostService,private Router : Router) { }

  ngOnInit(): void {
    console.log(this.post)
    console.log(this.index)
  }

  OnDelete(){
    console.log("I Am delete")
    this.PostService.deletePost(this.index)
  }

  OnEdit(){
    console.log("I am here to edit")
    this.Router.navigate(['/post-edit',this.index])
  }

}
