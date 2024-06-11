import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrl: './episode.component.css'
})
export class EpisodeComponent {
  episodes: any[] = [];
  filteredEpisodes: any[] = []; 

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getEpisodes().subscribe(data => {
      this.episodes = data.results;
      this.filteredEpisodes = this.episodes; 
    });
  }

  onSearchValueChanged(searchTerm: string): void {
    console.log(this.filteredEpisodes)
    this.filteredEpisodes = this.episodes.filter(episode =>
      episode.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
