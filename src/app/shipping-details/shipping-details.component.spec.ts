import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingDetailsComponent } from './shipping-details.component';

describe('ShippingDetailsComponent', () => {
  let component: ShippingDetailsComponent;
  let fixture: ComponentFixture<ShippingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShippingDetailsComponent]
    });
    fixture = TestBed.createComponent(ShippingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
