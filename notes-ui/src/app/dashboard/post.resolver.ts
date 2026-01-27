// post.resolver.ts
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { PostService, Post } from '../services/post.service';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostResolver implements Resolve<Post[]> {
  constructor(private postService: PostService) {}

  resolve(): Observable<Post[]> {
    return this.postService.getUserPosts().pipe(
    tap(posts => this.postService.setPosts(posts))
    );
  }
}
