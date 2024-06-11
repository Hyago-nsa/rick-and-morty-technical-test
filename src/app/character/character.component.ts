import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  username: string;

  constructor(private route: ActivatedRoute,private appService: AppService) {
    this.username = this.appService.getUsername();
  }



  ngOnInit() {
 
  }
}
