import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  username: string = '';
  password: string = '';

  login() {
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    this.username.trim() === '' ? this.username = 'Guest' : this.username
    this.router.navigate(['/home',{ username: this.username }]);
  }
}
