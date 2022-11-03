import { ProductService } from './../../core/services/product.service';
import { Product } from './../../core/model/product';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  public product:Product;
  public id: number;

  constructor(private productService:ProductService,
    private route: Router, private path: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.path.snapshot.params["id"]
    this.product= new Product()
    if (this.id){
      this.product = this.productService.listProduct.filter((product)=> product.id ==this.id)[0]
    }
  }
  saveProduct(){
    //this.product.nbrLike=0;
    this.productService.listProduct.push(this.product);
    this.route.navigate(['product/list'])
  }

}
