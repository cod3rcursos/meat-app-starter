import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemsComponent } from './order-items.component';

describe('OrderItemsComponent', () => {
  let component: OrderItemsComponent;
  let fixture: ComponentFixture<OrderItemsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [OrderItemsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
