import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detailData = []

  constructor(
    private route: ActivatedRoute,
    public productSerivce: ProductsService
  ) {
    // パラメータからidを抽出
    const id = this.route.snapshot.paramMap.get('id');

    this.productSerivce.fetchProductDetail(id).subscribe(detailData => {
      this.detailData = detailData
    })
  }

  ngOnInit() {
  }

}
