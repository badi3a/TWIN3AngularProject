import { Product } from './../../core/model/product';
import { ProductService } from './../../core/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  public list : Product[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.list=this.productService.
    listProduct.
    filter(p => p.quantity==0);
  }

}
