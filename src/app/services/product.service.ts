import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/Product';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsPath = environment.apiUrl + 'products';

  constructor(
    private http: HttpClient,
    private authService: AuthService) { }
  
  create(data): Observable<Product> {
    return this.http.post<Product>(this.productsPath + '/create', data);
  }

  getProducts(brandId: number): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.productsPath + '/GetProductsByBrand?BrandId=' + brandId);
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(this.productsPath + '/' + id);
  }

  editProduct(product: Product) {
    return this.http.put(this.productsPath, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(this.productsPath + '/' + id);
  }
}
