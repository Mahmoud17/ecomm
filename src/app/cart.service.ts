import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  headers: any = {
    token: localStorage.getItem('userToken'),
  };
  baseURL = 'https://ecommerce.routemisr.com/api/v1/cart';

  cartId = new BehaviorSubject(null);
  numOfItems = new BehaviorSubject(0);
  constructor(private _HttpClient: HttpClient) {
    this.getLoggedUserCart().subscribe({
      next: (res) => {
        this.cartId.next(res.data._id);
        this.numOfItems.next(res.numOfCartItems);
      },
      error: (err) => console.log(err),
    });
  }

  addToCart(product: string): Observable<any> {
    return this._HttpClient.post(
      this.baseURL,
      { productId: product },
      {
        headers: this.headers,
      }
    );
  }

  getLoggedUserCart(): Observable<any> {
    return this._HttpClient.get(this.baseURL, { headers: this.headers });
  }

  removeProduct(product: string): Observable<any> {
    return this._HttpClient.delete(this.baseURL + '/' + product, {
      headers: this.headers,
    });
  }
  updateProduct(product: string, count: number): Observable<any> {
    return this._HttpClient.put(
      this.baseURL + '/' + product,
      { count: count },
      { headers: this.headers }
    );
  }
  onlinePayment(shippingDetails: any, cartId: any): Observable<any> {
    return this._HttpClient.post(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      { shippingAddress: shippingDetails },
      { headers: this.headers }
    );
  }
}
