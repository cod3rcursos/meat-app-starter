import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDetailsComponent } from './restaurant-details.component';

describe('RestaurantDetailsComponent', () => {
  let component: RestaurantDetailsComponent;
  let fixture: ComponentFixture<RestaurantDetailsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [RestaurantDetailsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
