import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interface/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API = 'http://localhost:3000/products';

  constructor(public http: HttpClient) { }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.API}`)
  }
  getProductById(id: string): Observable<IProduct>{
    return this.http.get<IProduct>(`${this.API}/${id}`)
  }
  deleteProduct(id: string): Observable<IProduct>{
    return this.http.delete<IProduct>(`${this.API}/${id}`)
  }
  addProduct(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(`${this.API}`, product)
  }
  updateProduct(product: IProduct): Observable<IProduct>{
    return this.http.put<IProduct>(`${this.API}/${product.id}`, product)
  }
}
