import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms"
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading = false
  apiError:string = ''
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required])
  })

  constructor(private _Auth: AuthService, private _Router: Router) { }

  login(form: FormGroup) {
    this.loading = true
    if(form.valid) {
        this._Auth.login(form.value).subscribe({
          next: res => {
            this.loading = false
            if (res.message == "success") {
              localStorage.setItem("userToken", res.token)
              this._Auth.decode()
              this._Router.navigate(['/home'])
            }
          },
          error: err => {
            console.log(err)
            this.apiError = err.error.message
            this.loading = false
          }
        })
    }
  }
}
