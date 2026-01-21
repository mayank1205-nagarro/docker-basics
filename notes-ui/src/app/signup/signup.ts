import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.html',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule
  ],
  styleUrls: ['./signup.scss']
})
export class Signup {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Signup data:', this.signupForm.value);
      this.authService.signup(
        this.signupForm.value.username,
        this.signupForm.value.email,
        this.signupForm.value.password
      ).subscribe({
        next: (res) => console.log('Signup success:', res),
        error: (err) => console.error('Signup failed:', err)
      });
    }
  }
}
