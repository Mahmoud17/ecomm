import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories: any;
  constructor(private _ProductsService: ProductsService) {}

  ngOnInit() {
    this._ProductsService.getCategories().subscribe((res) => {
      console.log(res);
      this.categories = res.data;
    });
  }
}
