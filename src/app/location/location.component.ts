import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  username: string;

  constructor(private appService: AppService) {
    this.username = this.appService.getUsername();
  }
}
