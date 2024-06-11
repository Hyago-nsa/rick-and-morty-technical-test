import { Component} from '@angular/core';
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
    private appService: AppService
  ) {}

  private getRandomUniqueIndex(max: number, exclude: Set<number>): number {
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
  
    for (const cardType of cardTypes) {
      const randomIndex = this.getRandomUniqueIndex(numResults, excludeIndexes);
      const { image } = results[randomIndex];
      this.cards.push({ imageURL: image, ...cardType });
      excludeIndexes.add(randomIndex);
    }
  
    if (!this.appService.getUserImage()) {
      const randomIndex = this.getRandomUniqueIndex(numResults, excludeIndexes);
      const { image } = results[randomIndex];
      this.appService.setUserImage(image);
    }
  }

  redirectToPage(page: string): void {
    this.appService.redirectToPage(page)
  }

  ngOnInit(): void {
    this.appService.getCharacters().subscribe(data => {
      this.setRandomImageURLs(data.results);
    });
  }
}
