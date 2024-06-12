import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { Subscription, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrl: './location-detail.component.css'
})
export class LocationDetailComponent implements OnInit, OnDestroy {
  location: any;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit() {
    this.fetchLocation();
  }

  fetchLocation() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subscription = this.appService.getLocations().pipe(
      map(data => data.results.find(loc => loc.id === id)),
      catchError(error => {
        console.error('Error fetching location:', error);
        return throwError(error);
      })
    ).subscribe(location => {
      this.location = location;
      console.log(this.location);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
