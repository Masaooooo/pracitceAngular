import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  productData = []

  constructor(
    public productSerivce: ProductsService
  ) {
    this.productSerivce.fetchProducts().subscribe(productData => {
      this.productData = productData
    })
  }

  ngOnInit() {

  }

}
