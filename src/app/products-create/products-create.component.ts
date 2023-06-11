import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { IProduct } from '../interface/IProduct';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent {
  productForm = this.FormBuilder.group({
    name: [''],
    price: [0],
    desc: [''],
  });

  constructor(
    private productService: ProductService,
    private FormBuilder: UntypedFormBuilder
  ){}

  onHandleSubmit() {
    const product: IProduct = {
      id: '',
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0,
      desc: this.productForm.value.desc || '',
    }

    this.productService.addProduct(product).subscribe(
      (product) => {
        alert (`Them san pham thanh cong: ${product.name}`)
      },
      (error) => {
        alert (`Tham san pham that bai: ${error.message}`)
      }
    )
  }
}
