import { Component, OnInit } from '@angular/core';
import { post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  listofPosts : post[] = [
    // new post(
    //   "First Title",
    //   "My Author",
    //   "/assets/nature.jpg",
    //   "20-06-2002",
    //   "Demo Description",
    // ),
    // new post(
    //   "Second Title",
    //   "My Author",
    //   "/assets/nature.jpg",
    //   "20-06-2002",
    //   "Demo Description",
    // ),
    // new post(
    //   "Third  Title",
    //   "My Author",
    //   "/assets/nature.jpg",
    //   "20-06-2002",
    //   "Demo Description",
    // ),
    // new post(
    //   "Fourth Title",
    //   "My Author",
    //   "/assets/nature.jpg",
    //   "20-06-2002",
    //   "Demo Description",
    // )
  ];
  constructor(private PostService : PostService) { }

  ngOnInit(): void {
    this.listofPosts = this.PostService.getPosts()
  }

}
