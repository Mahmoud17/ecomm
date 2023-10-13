import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  numItems = 0;
  loggedIn: boolean = false;
  constructor(
    private _auth: AuthService,
    private _Router: Router,
    private _cart: CartService
  ) {}
  ngOnInit() {
    this._auth.userData.subscribe({
      next: () => {
        if (this._auth.userData.getValue() !== null) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      },
    });

    this._cart.numOfItems.subscribe((x) => (this.numItems = x));
  }
  logout() {
    this._auth.logout();
    localStorage.removeItem('userToken');
    this._Router.navigate(['/login']);
  }
}
