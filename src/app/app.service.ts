import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiUrl = 'https://rickandmortyapi.com/api';
  private username: string | null = null;
  private usernameImage: string
  
  constructor(private http: HttpClient,private router: Router) { }

  redirectToPage(page: string): void {
    this.router.navigate([page]);
  }

  setUsername(username: string): void {
    this.username = username;
  }

  getUsername(): string | null {
    return this.username;
  }

  setUserImage(usernameImage: string): void {
    this.usernameImage = usernameImage;
  }

  getUserImage(): string | null {
    return this.usernameImage
  }

  getCharacters(): Observable<any> {
    return this.http.get(`${this.apiUrl}/character`);
  }

  getLocations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/location`);
  }

  getLocationsNames(locateUrls: string[]): Observable<string[]> {
    const observables: Observable<string>[] = [];
    for (const locateUrl of locateUrls) {
      observables.push(
        this.http.get<any>(locateUrl).pipe(
          map(response => response.name), // Assumindo que o nome do residente está em response.name
          catchError(error => {
            console.error('Error fetching location:', error);
            return [];
          })
        )
      );
    }
    return forkJoin(observables);
  }

  getEpisodes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/episode`);
  }

  getEpisodesNames(episodeUrls: string[]): Observable<string[]> {
    const observables: Observable<string>[] = [];
    for (const episodeUrl of episodeUrls) {
      observables.push(
        this.http.get<any>(episodeUrl).pipe(
          map(response => response.name),
          catchError(error => {
            console.error('Error fetching episode:', error);
            return [];
          })
        )
      );
    }
    return forkJoin(observables);
  }
}
