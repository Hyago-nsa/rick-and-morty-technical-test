import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  username: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Recupera os parâmetros de rota
    this.route.params.subscribe(params => {
      this.username = params['username'];
    });
  }
}
