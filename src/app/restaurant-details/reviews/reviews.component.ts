import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<any>;

  constructor(
    private restaurantService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.reviews = this.restaurantService.fetchReviews(
      this.route.parent.snapshot.params.id
    );
  }

  reviewImg(rating: number): string {
    let img = '';
    if (rating < 3) {
      img = 'pissed.png';
    } else if (rating >= 3 && rating < 4) {
      img = 'soso.png';
    } else {
      img = 'loved.png';
    }
    return `assets/img/reactions/${img}`;
  }
}
