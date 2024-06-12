import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { Subscription, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrl: './episode-detail.component.css'
})
export class EpisodeDetailComponent implements OnInit, OnDestroy {
  episode: any;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit() {
    this.fetchEpisode();
  }

  fetchEpisode() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subscription = this.appService.getEpisodes().pipe(
      map(data => data.results.find(epi => epi.id === id)),
      catchError(error => {
        console.error('Error fetching episode:', error);
        return throwError(error);
      })
    ).subscribe(episode => {
      this.episode = episode;
      console.log(this.episode);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
