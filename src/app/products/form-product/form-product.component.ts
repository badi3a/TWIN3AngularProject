import { ProductService } from './../../core/services/product.service';
import { Product } from './../../core/model/product';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  public product:Product;
  public action: string;

  constructor(private productService:ProductService,
    private route: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //update
    let id= this.currentRoute.snapshot.params['id'];
    if(id!=null){
      //update
      this.action= 'update';
      this.productService.getProductById(id).subscribe(
        (data: Product)=>{this.product=data}
      )
    }else{
      //add
      this.action= 'add new'
      this.product= new Product()
    }

  }
  saveProduct(){
    //this.product.nbrLike=0;
   if(this.action=='update'){
    this.productService.updateProduct(this.product).subscribe(
      ()=>this.route.navigate(['product/list']),
      ()=>{console.log('error'),
      ()=>{console.log('complete')}}
    )
   }else{
    this.productService.addProduct(this.product).subscribe(
      ()=>this.route.navigate(['product/list']),
      ()=>{console.log('error'),
      ()=>{console.log('complete')}}
    )
   }

  }

}
