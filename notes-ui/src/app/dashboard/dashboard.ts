import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../services/post.service';
import { PostCardComponent } from '../post-card/post-card';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { ɵInternalFormsSharedModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PostCardComponent, MatCardModule, ɵInternalFormsSharedModule, CommonModule],
  providers: [PostService],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard implements OnInit {
  posts: Post[] = [];
  loading = true;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.posts = this.route.snapshot.data['posts'];
    this.loading = false;
  }

logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
