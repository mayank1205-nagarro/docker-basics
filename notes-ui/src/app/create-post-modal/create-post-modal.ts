import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-create-post-modal',
  templateUrl: './create-post-modal.html',
  styleUrls: ['./create-post-modal.scss'],
  imports: [CommonModule, FormsModule],
})
export class CreatePostModal {
  title: string = '';
  content: string = '';

  @Output() close = new EventEmitter<void>();
  @Output() postCreated = new EventEmitter<any>();

  submitPost() {
    if (this.title && this.content) {
      this.postCreated.emit({ title: this.title, content: this.content });
      this.title = '';
      this.content = '';
    }
  }

  closeModal() {
    this.close.emit();
  }
}
