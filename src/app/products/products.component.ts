import { Component } from '@angular/core';
import { IProduct } from '../interface/IProduct';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: IProduct[] = [];
  constructor(private productService: ProductService){
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => console.log(error.message)
    );
  }
  delete(id: string){
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id)
    })
  }
}
