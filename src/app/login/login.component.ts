import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private appService: AppService) {}
  invalidLogin: boolean = false;

  headerTitle = "Login"
  username: string = '';
  password: string = '';

  validationLogin(username: string,password: any): boolean{
    const isUsernameEmpty = username.trim() === '';
    const isPasswordEmpty = password.trim() === '';

  return !(isUsernameEmpty || isPasswordEmpty);
  }

  login() {
    
    if(!this.validationLogin(this.username,this.password)){
      this.headerTitle = "Invalid username or password"
      this.invalidLogin = true
      return
    }
    this.appService.setUsername(this.username)
    this.router.navigate(['/home']); 
  }
}
