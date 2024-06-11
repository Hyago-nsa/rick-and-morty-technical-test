import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { LocationComponent } from './location/location.component';
import { EpisodeComponent } from './episode/episode.component';

// import { AppComponent } from "./app.component";

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch:"full"},
  {path: "home", component: HomeComponent },
  {path: "login", component: LoginComponent },
  {path: "character", component: CharacterComponent},
  {path: "location", component: LocationComponent},
  {path: "episode", component: EpisodeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
