import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss'],
})
export class CategoryDetailsComponent {
  constructor(
    private _ProductsService: ProductsService,
    private _cart: CartService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  id: any = '';
  data: any = null;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    this._ProductsService.getCategory(this.id).subscribe({
      next: (res) => {
        console.log(res.data);
        this.data = res.data;
      },
    });
  }
}
