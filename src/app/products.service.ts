import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _Httpclient: HttpClient) {}

  getProducts(): Observable<any> {
    return this._Httpclient.get(
      'https://ecommerce.routemisr.com/api/v1/products'
    );
  }

  getProduct(id: string): Observable<any> {
    return this._Httpclient.get(
      'https://ecommerce.routemisr.com/api/v1/products/' + id
    );
  }

  getCategories(): Observable<any> {
    return this._Httpclient.get(
      'https://ecommerce.routemisr.com/api/v1/categories'
    );
  }
  getCategory(id: string): Observable<any> {
    return this._Httpclient.get(
      `https://ecommerce.routemisr.com/api/v1/categories/${id}`
    );
  }
  getBrands(): Observable<any> {
    return this._Httpclient.get(
      'https://ecommerce.routemisr.com/api/v1/brands'
    );
  }
}
