import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  constructor(private router: Router) {}

  @Input() item: any;

  showItemDetails(item: any) {
    if(item.episode){
      this.router.navigate(['/episode', item.id]);
    }
    if(item.dimension){
      this.router.navigate(['/location', item.id]);
    }
  }
}
