import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiUrl = 'https://rickandmortyapi.com/api';
  private username: string | null = null;

  constructor(private http: HttpClient) { }

  setUsername(username: string): void {
    this.username = username;
  }

  getUsername(): string | null {
    return this.username;
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
