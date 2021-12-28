import { Routes } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";

export const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "restaurants", component: RestaurantsComponent },
  { path: "about", component: AboutComponent },
];
