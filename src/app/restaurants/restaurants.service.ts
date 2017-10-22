import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from '../restaurant-details/menu-item/menu-item.model';
import { MEAT_API } from '../app.api';
import { ErrorHandler } from '../app.error-handler';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestaurantsService {
  constructor(private http: Http) {}

  fetchRestaurants(): Observable<Restaurant[]> {
    return this.http
      .get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  fetchRestaurant(id: string): Observable<Restaurant> {
    return this.http
      .get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  fetchReviews(id: string): Observable<any> {
    return this.http
      .get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  fetchMenu(id: string): Observable<MenuItem[]> {
    return this.http
      .get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }
}
