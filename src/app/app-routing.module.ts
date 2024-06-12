import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { LocationComponent } from './location/location.component';
import { EpisodeComponent } from './episode/episode.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch:"full"},
  {path: "login", component: LoginComponent },
  {path: "home", component: HomeComponent },
  {path: "profile", component: ProfileComponent },
  {path: "character", component: CharacterComponent},
  {path: 'character/:id', component: CharacterDetailComponent },
  {path: "location", component: LocationComponent},
  {path: "location/:id", component: LocationDetailComponent},
  {path: "episode", component: EpisodeComponent},
  {path: "episode/:id", component: EpisodeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
