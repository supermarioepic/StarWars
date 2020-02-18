import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { MoviesComponent } from "../pages/movies/movies.component";
import { LocationsComponent } from "../pages/locations/locations.component";
import { DroidsComponent } from "../pages/droids/droids.component";
import { CharactersComponent } from "../pages/characters/characters.component";

const routes: Routes = [
  {
    path: "movies",
    component: MoviesComponent
  },
  {
   path: "locations",
   component: LocationsComponent 
  },
  {
    path: "droids",
    component: DroidsComponent 
  },
  {
    path: "characters",
    component: CharactersComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
