import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { ReviewsComponent } from './restaurant-details/reviews/reviews.component';
import { MenuComponent } from './restaurant-details/menu/menu.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  {
    path: 'restaurants/:id',
    component: RestaurantDetailsComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'reviews', component: ReviewsComponent },
      { path: 'menu', component: MenuComponent }
    ]
  }
];
