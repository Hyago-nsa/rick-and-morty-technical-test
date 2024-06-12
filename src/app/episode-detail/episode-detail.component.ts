import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { Subscription, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css']
})
export class EpisodeDetailComponent implements OnInit, OnDestroy {
  episode: any;
  characters: string[] = [];
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit() {
    this.fetchEpisode();
  }

  fetchEpisode() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subscription = this.appService.getEpisodes().pipe(
      switchMap(data => {
        const episode = data.results.find(epi => epi.id === id);
        this.episode = episode;
        return this.appService.getCharactersNames(episode.characters);
      }),
      catchError(error => {
        console.error('Error fetching episode:', error);
        return throwError(error);
      })
    ).subscribe(characters => {
      this.characters = characters;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
