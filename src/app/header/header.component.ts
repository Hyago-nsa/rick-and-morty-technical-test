// header.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username: string;
  searchTerm: string = '';
  menuOpen: boolean = false;

  userImage = this.appService.getUserImage() || "../../assets/guest-png.png";
  userLogout = "../../assets/logout-png.png";
  hamburger = "../../assets/hamburger-png.png";

  @Output() searchValueChanged = new EventEmitter<string>();

  constructor(private appService: AppService, private router: Router) {
    this.username = this.appService.getUsername();

    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)).subscribe(()=> {
        this.searchTerm = "";
      });
  }

  redirectToPage(page: string): void {
    this.appService.redirectToPage(page);
  }

  filterListings(): void {
    this.searchValueChanged.emit(this.searchTerm);
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
