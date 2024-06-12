import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { Subscription, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrl: './location-detail.component.css'
})
export class LocationDetailComponent implements OnInit, OnDestroy {
  location: any;
  residents: string[] = [];
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit() {
    this.fetchLocation();
  }

  fetchLocation() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subscription = this.appService.getLocations().pipe(
      switchMap(data => {
        const location = data.results.find(loc => loc.id === id);
        this.location = location;
        return this.appService.getLocationsNames(location.residents);
      }),
      catchError(error => {
        console.error('Error fetching location:', error);
        return throwError(error);
      })
    ).subscribe(residents => {
      this.residents = residents;
    });
  }
  

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
