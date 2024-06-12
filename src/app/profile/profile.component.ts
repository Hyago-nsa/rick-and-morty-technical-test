import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  username: string;
  userImage = this.appService.getUserImage() || "../../assets/guest-png.png";

  constructor(private appService: AppService){
    this.username = this.appService.getUsername();
  }
}
