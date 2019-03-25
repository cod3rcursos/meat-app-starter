import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { MenuItem } from './menu-item.model';
@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // Ele envia o objeto de item de menu para ser tratado dentro do evento "add" dos componentes
  emitAddEvent() {
    this.add.emit(this.menuItem);
  }

}
