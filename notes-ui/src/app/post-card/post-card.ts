import { Component, Input } from '@angular/core';
import { Post } from '../services/post.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './post-card.html',
  styleUrls: ['./post-card.scss']
})
export class PostCardComponent {
  @Input() post!: Post;
}
