import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { Restaurant } from "./restaurant/restaurant.model";
//import { ErrorHandler } from "app/app.error-handler";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  restaurants(): Observable<Restaurant[]> {
    return this.http
      .get<Restaurant[]>(`${MEAT_API}/restaurants`)
  }

  restaurantById(id: string): Observable<Restaurant> {
    return this.http
      .get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http
      .get(`${MEAT_API}/restaurants/${id}/reviews`)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http
      .get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
  }
}
