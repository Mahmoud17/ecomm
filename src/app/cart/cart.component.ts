import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent{
  data: any
  constructor(private _cart: CartService) { }

  ngOnInit() {
    this._cart.getLoggedUserCart().subscribe({
      next: res => {
        console.log(res.data)
        this.data = res.data
      },
      error: err => console.log(err)
    })
  }

  removeProduct(product:string) {
    this._cart.removeProduct(product).subscribe({
      next: res => {
        console.log(res.data)
        this.data = res.data
      },
      error: err => console.log(err)
    })
  }
  updateProduct(product:string, count:number) {
    this._cart.updateProduct(product, count).subscribe({
      next: res => {
        console.log(res.data)
        this.data = res.data
      },
      error: err => console.log(err)
    })
  }
}
