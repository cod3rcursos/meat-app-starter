import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: Observable<MenuItem[]>;

  constructor(
    private restaurantService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.menu = this.restaurantService.fetchMenu(
      this.route.parent.snapshot.params.id
    );
  }

  handleOnAdd(item: MenuItem) {
    console.log(item);
  }
}
