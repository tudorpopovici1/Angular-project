import { Injectable } from '@angular/core';

import { Post } from './post';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private requestUrl: string = "https://jsonplaceholder.typicode.com/posts";


  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.requestUrl);
  }

  getSpecificPost(id: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.requestUrl + "?id=" + id);
  }

  sendPost(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(this.requestUrl, post, httpOptions);
  }

}
