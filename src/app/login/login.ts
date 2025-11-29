import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  router = inject(Router);
  
  // remove direct navigation - use onSubmit to navigate after validation
  login() {
    this.router.navigate(['home']);
  }

  user = {username: "logant", password: "logantpass"};

  username: string = '';
  password: string = '';
  submitted = false;
  errorMessage: string = '';
  loading = false;

  constructor(private http: HttpClient) {}

  onSubmit(loginForm: any) {
    this.submitted = true;
    this.errorMessage = '';

    if (loginForm.valid) {
      this.loading = true;
      // Query the users endpoint and check provided credentials
      this.http
        .get<{ users: any[] }>('https://dummyjson.com/users')
        .pipe(map(res => res.users || []))
        .subscribe({
          next: (users: any[]) => {
            // Find a user with matching username and password
            const found = users.find(u => u.username === this.username && u.password === this.password);
            if (found) {
              localStorage.setItem('auth', JSON.stringify({ auth: true }));
              this.router.navigate(['/home']);
            } else {
              this.loading = false;
              this.errorMessage = 'Invalid username or password';
            }
          },
          error: () => {
            this.loading = false;
            this.errorMessage = 'Server error';
          }
        });
    }
  }
}
