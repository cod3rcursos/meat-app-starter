import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem: MenuItem;
  @Output() onAdd = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.onAdd.emit(this.menuItem);
  }
}
