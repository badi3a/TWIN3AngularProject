import { AdminProductComponent } from './admin-product/admin-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { FormProductComponent } from './form-product/form-product.component';

const routes: Routes = [
  { path: '', component: ProductsComponent, children:[
    {path:'',redirectTo: 'list', pathMatch:"full"},
    {path:'list', component: ListProductComponent},
    {path:'new', component: FormProductComponent},
    {path:'category/:category', component:ListProductComponent},
    {path:'outofstock', component: AdminProductComponent},
    {path:'update/:id', component: FormProductComponent}
  ] },

                    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
