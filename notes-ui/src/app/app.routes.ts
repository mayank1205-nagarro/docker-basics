import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './auth-guard';
import { PostResolver } from './dashboard/post.resolver';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard], resolve: { posts: PostResolver } },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
