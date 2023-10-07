import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  id: any = ''
  data:any = null
  constructor(private _ActivatedRoute: ActivatedRoute, private _ProductsService: ProductsService) {

  }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id')
    })

    this._ProductsService.getProduct(this.id).subscribe({
      next: (res) => {
        this.data = res.data
      }
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }

}
