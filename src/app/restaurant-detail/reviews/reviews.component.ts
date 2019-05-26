import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantsService } from '../../restaurants/restaurants.service';

import { Observable } from 'rxjs';
@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantsService
      .reviewsOfRestaurant(this.route.parent.snapshot.params['id']);  // O atributo 'parent' faz com que pegue o id da rota pai, já que é la que ele se encontra
  }

}
