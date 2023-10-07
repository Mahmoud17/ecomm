import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms"
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loading = false
  apiError:string = ''
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required]),
    rePassword: new FormControl('', [Validators.minLength(8), Validators.required]),
    phone: new FormControl('', [Validators.pattern(/^01[0125][0-9]{8}/), Validators.required])
  })

  constructor(private _Auth: AuthService, private _Router: Router) { }

  register(form: FormGroup) {
    this.loading = true
    if(form.valid) {
        this._Auth.register(form.value).subscribe({
          next: res => {
            this.loading = false
            if (res.message == "success") {
              this._Router.navigate(['login'])
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
