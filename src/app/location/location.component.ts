import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  locations: any[] = [];
  filteredLocations: any[] = []; 

  constructor(private appService: AppService) {
    
  }

  ngOnInit() {
    this.appService.getLocations().subscribe(data => {
      this.locations = data.results;
      this.filteredLocations = this.locations; 
    });
  }

  onSearchValueChanged(searchTerm: string): void {
    console.log(this.filteredLocations)
    this.filteredLocations = this.locations.filter(location =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
