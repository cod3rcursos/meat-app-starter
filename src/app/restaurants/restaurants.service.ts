import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";

import { Restaurant } from "./restaurant/restaurant.model";

@Injectable()
export class RestaurantsService {
  constructor(private http: Http) {}

  restaurants(): Observable<Restaurant[]> {
    return this.http
      .get(`${MEAT_API}/restaurants`)
      .map((response) => response.json());
  }
}
