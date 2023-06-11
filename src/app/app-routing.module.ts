import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { ProductsUpdateComponent } from './products-update/products-update.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'products-create', component: ProductsCreateComponent},
  {path: 'products-update/:id', component: ProductsUpdateComponent},
  {path: 'products-detail/:id', component: ProductsDetailComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
