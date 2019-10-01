import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input() posted: Post;

  constructor(private postService: PostService, private actRoute: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.getSpecificPost();
  }

  getSpecificPost(): void {
    var id = +this.actRoute.snapshot.paramMap.get("id");
    this.postService.getSpecificPost(id)
    .subscribe((post) => {
      this.posted = post[0];
    });
  }

  goBack(): void {
    this.location.back();
  }

}
