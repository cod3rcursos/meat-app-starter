import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { MenuItem } from './menu-item.model';
@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  menuItemState = 'ready';

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
