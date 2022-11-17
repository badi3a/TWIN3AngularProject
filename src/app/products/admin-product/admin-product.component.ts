import { Product } from './../../core/model/product';
import { ProductService } from './../../core/services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  public list: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(
      (data:Product[])=>{
        this.list=data
        this.list = this.list.filter(p => p.quantity == 0);}
    )
  }

  delete(p: Product) {
    let i = this.list.indexOf(p);
    this.productService.deleteProduct(p.id).subscribe(
      ()=>this.list.splice(i, 1)
    )

  }

}
