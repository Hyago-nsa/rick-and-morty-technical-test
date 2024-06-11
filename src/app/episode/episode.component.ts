import { Component } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.css'
})
export class EpisodeComponent {

  username: string;

  constructor(private appService: AppService) {
    this.username = this.appService.getUsername();
  }

}
