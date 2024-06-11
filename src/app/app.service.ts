import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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

  getEpisodes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/episode`);
  }
}
