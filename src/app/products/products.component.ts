import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
import { Product } from 'interfaces/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  items: Product[] = [];
  constructor(
    private _ProductsService: ProductsService,
    private _cart: CartService
  ) {}

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe((res) => {
      console.log(res);
      this.items = res.data;
    });
  }

  addToCart(productId: string) {
    this._cart.addToCart(productId).subscribe({
      next: (res) => {
        console.log(res);
        this._cart.numOfItems.next(res.numOfCartItems);
        console.log(this._cart.numOfItems.getValue());
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
