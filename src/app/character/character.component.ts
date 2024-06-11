import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  characters: any[] = [];
  filteredCharacters: any[] = []; 

  constructor(private route: ActivatedRoute, private appService: AppService) {
  }

  ngOnInit() {
    this.appService.getCharacters().subscribe(data => {
      this.characters = data.results;
      this.filteredCharacters = this.characters; 
    });
  }

  onSearchValueChanged(searchTerm: string): void {
    this.filteredCharacters = this.characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
