import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  content: string;
}

@Injectable({ providedIn: 'root' })
export class PostService {

  private postsSubject = new BehaviorSubject<Post[]>([]);
  posts$ = this.postsSubject.asObservable();

  private apiUrl = 'http://localhost:8080/posts'; // adjust to your backend

  constructor(private http: HttpClient) {}

  setPosts(posts: Post[]) {
    this.postsSubject.next(posts);
  }

  addPost(post: Post) {
    const current = this.postsSubject.value;
    this.postsSubject.next([...current, post]);
  }

  getUserPosts(): Observable<Post[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<Post[]>(this.apiUrl, { headers });
  }

  createPost(post: Post) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.post<Post>(this.apiUrl, post, { headers });
  }
}
