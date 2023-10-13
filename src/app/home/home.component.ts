import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../products.service';
import { Product } from 'interfaces/product';
import { Category } from 'interfaces/category';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  items: Product[] = [];
  categories: Category[] = [];
  constructor(
    private _ProductsService: ProductsService,
    private _cart: CartService
  ) {}

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe((res) => {
      console.log(res);
      this.items = res.data;
    });

    this._ProductsService.getCategories().subscribe((res) => {
      console.log(res);
      this.categories = res.data;
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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };
}
