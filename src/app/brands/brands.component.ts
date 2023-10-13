import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss'],
})
export class BrandsComponent {
  brands: any;
  constructor(private _ProductsService: ProductsService) {}

  ngOnInit() {
    this._ProductsService.getBrands().subscribe((res) => {
      console.log(res);
      this.brands = res.data;
    });
  }
}
