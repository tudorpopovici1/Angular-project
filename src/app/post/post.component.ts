import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[];
  showPosts: Post[];
  upperLimit: number = 6;

  constructor(private postService: PostService, private loc: Location) { }

  ngOnInit() {
    this.postService.getPosts()
    .subscribe((posts) => {
      this.posts = posts;
      this.showPosts = this.posts.slice(0, this.upperLimit);
    });
  }

  getMorePosts(): void {
    this.upperLimit += 6;
    this.showPosts = this.posts.slice(0, this.upperLimit);
  }

}
