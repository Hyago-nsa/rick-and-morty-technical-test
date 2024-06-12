import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
  constructor(private router: Router) {}

  @Input() character: any;

  showCharacterDetails(character: any) {
    this.router.navigate(['/character', character.id]);
  }
}
