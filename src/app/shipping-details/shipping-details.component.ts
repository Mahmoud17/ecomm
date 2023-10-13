import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss'],
})
export class ShippingDetailsComponent {
  cartId = null;
  constructor(private _cart: CartService) {
    _cart.cartId.subscribe((x) => {
      this.cartId = x;
    });
  }
  shippingForm: FormGroup = new FormGroup({
    details: new FormControl(''),
    phone: new FormControl(null),
    city: new FormControl(''),
  });

  handleSubmit(form: FormGroup) {
    console.log(form);
    this._cart.onlinePayment(this.shippingForm.value, this.cartId).subscribe({
      next: (res) => {
        console.log(res);
        window.location.href = res.session.url;
      },
      error: (err) => console.log(err),
    });
  }
}
