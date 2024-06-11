import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  characterImageURL: any[];
  locationImageURL: any[];
  episodeImageURL: any[];

  constructor(private route: ActivatedRoute,private appService: AppService) {}

  randomNumber(num:number){
    return Math.floor(Math.random() * num)
  }

  ngOnInit() {
    this.appService.getCharacters().subscribe(data => {
      this.characterImageURL = data.results[this.randomNumber(data.results.length)].image
      this.locationImageURL = data.results[this.randomNumber(data.results.length)].image
      this.episodeImageURL = data.results[this.randomNumber(data.results.length)].image
    })
  }
}
