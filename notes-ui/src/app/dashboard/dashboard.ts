import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../services/post.service';
import { PostCardComponent } from '../post-card/post-card';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ɵInternalFormsSharedModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { CreatePostModal } from "../create-post-modal/create-post-modal";
import { ToastrService } from 'ngx-toastr';
import { ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PostCardComponent, MatCardModule, ɵInternalFormsSharedModule, CommonModule, CreatePostModal, FormsModule],
  providers: [PostService],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard implements OnInit {
  posts$!: Observable<Post[]>;
  loading = true;
  isModalOpen = false;

  openCreatePostModal() {
    this.isModalOpen = true;
  }

  closeCreatePostModal() { 
    this.isModalOpen = false;
    this.cd.detectChanges(); 
  }



  addPost(newPost: any) {
    this.postService.createPost(newPost)
      .subscribe({
        next: (res) => {
            this.postService.addPost(newPost);
            this.toastr.success("Post creation successful!", 'Success', { positionClass: 'toast-top-right' });
            this.closeCreatePostModal();
        },
        error: (err) => {
          console.error('Error creating post:', err);
          this.toastr.error(err.error.message, 'Error', { positionClass: 'toast-top-right' });
        }
      });
  }

  constructor(private router: Router,
     private route: ActivatedRoute, 
     private toastr: ToastrService, 
     private postService: PostService,
     private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.posts$ = this.postService.posts$;
    this.route.data.subscribe(data => {
      if (data['posts']) {
        this.postService.setPosts(data['posts']); // sync resolver result
      }
    });
    this.loading = false;
  }

logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
