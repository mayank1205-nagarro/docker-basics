import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../services/auth';
import { Router, RouterLink } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.html',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule,
    RouterLink
],
  styleUrls: ['./signup.scss']
})
export class Signup {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private toastr: ToastrService) {
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
        next: (res) => {
            const token = res.headers.get('Authorization');
            console.log(token);
            localStorage.setItem('token', token);
            this.router.navigate(["/dashboard"]);
            this.toastr.success("Signup successful!", 'Success', { positionClass: 'toast-top-right' });
        },
        error: (err) => {
          console.error('Signup failed:', err)
          this.toastr.error(err.error.message, 'Error', { positionClass: 'toast-top-right' });
        }
      });
    }
  }
}
