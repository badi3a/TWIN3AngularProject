import { ListProductComponent } from './list-product/list-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';
import { FormProductComponent } from './form-product/form-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
<<<<<<< HEAD
=======
import { AdminProductComponent } from './admin-product/admin-product.component';
>>>>>>> S7#ServiceDependencyInjection


@NgModule({
  declarations: [
    ProductsComponent,
    ListProductComponent,
    FormProductComponent,
<<<<<<< HEAD
    DetailProductComponent
=======
    DetailProductComponent,
    AdminProductComponent
>>>>>>> S7#ServiceDependencyInjection
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
