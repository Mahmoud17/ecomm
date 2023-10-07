import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData = new BehaviorSubject(null)
  constructor(private _HttpClient: HttpClient) {
    if (localStorage.getItem("userToken") !== null) {
      this.decode()
    }
  }

  decode() {
    const token:string = JSON.stringify(localStorage.getItem("userToken"))
    const decoded:any = jwtDecode(token)
    console.log(decoded)
    this.userData.next(decoded)
  }

  register(userData:Object):Observable<any>{
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signup", userData)
  }

  login(userData:Object):Observable<any> {
    return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/auth/signin", userData)
  }

  logout() {
    this.userData.next(null)
  }

}
