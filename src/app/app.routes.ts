import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";

export const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "restaurants", component: RestaurantsComponent },
  {
    path: "restaurants/:id",
    component: RestaurantDetailComponent,
    children: [
      { path: "", redirectTo: "menu", pathMatch: "full" },
      { path: "menu", component: MenuComponent },
      { path: "reviews", component: ReviewsComponent },
    ],
  },
  { path: "about", loadChildren: "./about/about.module#AboutModule" },
];
