import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() { 
    return this.http.get<Product[]>(`${environment.baseUrl}products`)
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.baseUrl}products/${id}`)
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.baseUrl}products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) { 
    return this.http.put(`${environment.baseUrl}products/${id}`, changes);
  }

  deleleteProduct(id: string) { 
    return this.http.delete(`${environment.baseUrl}products/${id}`)
  }

}
