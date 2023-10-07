import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  loggedIn:boolean = false
  constructor(private _auth: AuthService, private _Router: Router) {}
  ngOnInit() {
    this._auth.userData.subscribe({
      next: () => {
        if (this._auth.userData.getValue() !== null) {
          this.loggedIn = true
        } else {
          this.loggedIn = false
        }
      }
    })
  }
  logout() {
    this._auth.logout()
    localStorage.removeItem("userToken")
    this._Router.navigate(['/login'])
  }
}
