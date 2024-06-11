import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

interface Card {
  imageURL: string;
  altText: string;
  title: string;
  route: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards: Card[] = [];

  constructor(
    private router: Router,
    private appService: AppService
  ) {}

  private getRandomIndex(max: number, exclude: Set<number>): number {
    let randomIndex = Math.floor(Math.random() * max);
    while (exclude.has(randomIndex)) {
      randomIndex = Math.floor(Math.random() * max);
    }
    return randomIndex;
  }

  private setRandomImageURLs(results: any[]): void {
    const numResults = results.length;
    const excludeIndexes = new Set<number>();

    const cardTypes = [
      { altText: 'Character Image', title: 'Characters', route: '/character' },
      { altText: 'Location Image', title: 'Locations', route: '/location' },
      { altText: 'Episode Image', title: 'Episodes', route: '/episode' }
    ];

    for (let i = 0; i < 3; i++) {
      const randomIndex = this.getRandomIndex(numResults, excludeIndexes);
      const { image } = results[randomIndex];
      const { altText, title, route } = cardTypes[i];
      
      this.cards.push({ imageURL: image, altText, title, route });
      excludeIndexes.add(randomIndex);
    }
  }

  redirectToPage(page: string): void {
    this.router.navigate([page]);
  }

  ngOnInit(): void {
    this.appService.getCharacters().subscribe(data => {
      this.setRandomImageURLs(data.results);
    });
  }
}
