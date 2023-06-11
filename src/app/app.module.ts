import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { ProductsUpdateComponent } from './products-update/products-update.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [AppComponent, ProductsComponent, ProductsCreateComponent, ProductsUpdateComponent, ProductsDetailComponent, NotFoundPageComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
