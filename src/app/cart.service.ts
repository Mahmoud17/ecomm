import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  headers:any = {
    token: localStorage.getItem("userToken")
  }
  baseURL = "https://ecommerce.routemisr.com/api/v1/cart"

  constructor(private _HttpClient: HttpClient) { }

  addToCart(product:string):Observable<any> {
    return this._HttpClient.post(this.baseURL, {productId: product},
    {
      headers: this.headers
    })
  }

  getLoggedUserCart():Observable<any> {
    return this._HttpClient.get(this.baseURL,{headers:this.headers})
  }

  removeProduct(product:string):Observable<any> {
    return this._HttpClient.delete(this.baseURL + '/' + product,
      {
        headers: this.headers
      })
  }
  updateProduct(product: string, count: number):Observable<any>  {
    return this._HttpClient.put(this.baseURL + '/' + product, {count: count}, {headers: this.headers})
  }
}
