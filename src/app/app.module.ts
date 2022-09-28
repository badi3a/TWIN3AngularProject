import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListProductComponent } from './list-product/list-product.component';
import { FooterComponent } from './footer/footer.component';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListProductComponent,
    FooterComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
