import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  paymentOptions: RadioOption[] = [
    {
      label: 'Dinheiro',
      value: 'din'
    },
    {
      label: 'Debito',
      value: 'deb'
    },
    {
      label: 'Credito',
      value: 'cre'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
