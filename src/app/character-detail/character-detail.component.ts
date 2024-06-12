import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { Subscription, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit, OnDestroy {
  character: any;
  episodes: string[] = [];
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit() {
    this.fetchCharacter();
  }

  fetchCharacter() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subscription = this.appService.getCharacters().pipe(
      switchMap(data => {
        const character = data.results.find(char => char.id === id);
        this.character = character;
        return this.appService.getEpisodesNames(character.episode);
      }),
      catchError(error => {
        console.error('Error fetching character:', error);
        return throwError(error);
      })
    ).subscribe(episodes => {
      this.episodes = episodes;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
