import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userid: number;
  title: string;
  message: string;
  errorMain: string;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  sendForm(): void {
    if (this.userid != undefined && this.isValid(this.title)
    && this.isValid(this.message)) {
      try {
        var post: Post = new Post();
        post.userId = this.userid;
        post.body = this.message;
        post.title = this.title;
        this.errorMain = "Wait...";
        this.postService.sendPost(post)
        .subscribe(
          (post) => {
          this.errorMain = "Successfully sent.";
        },
        (error) => {
          this.errorMain = "Something went wrong processing your request.";
        });
      } catch(e) {
        this.errorMain = "Check all your fields please.";
      }
    } else {
      this.errorMain = "Complete all the fields please.";
    }
  }

  // Helper function.
  private isValid(str: string): boolean {
    return str != undefined && str != "";
  }

}
