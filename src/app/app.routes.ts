import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";

export const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "restaurants", component: RestaurantsComponent },
  { path: "restaurants/:id", component: RestaurantDetailComponent },
  { path: "about", loadChildren: "./about/about.module#AboutModule" },
];
