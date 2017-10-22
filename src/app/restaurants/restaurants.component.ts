import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [RestaurantsService]
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];

  constructor(private restaurantsService: RestaurantsService) {}

  ngOnInit() {
    this.restaurantsService.fetchRestaurants().subscribe(restaurants => {
      this.restaurants = restaurants;
    });
  }
}
