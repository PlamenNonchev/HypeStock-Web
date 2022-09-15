import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EditorsPicks } from '../models/editorsPicks';
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
    data.brandId = Number(data.brandId);
    return this.http.post<Product>(this.productsPath + '/create', data);
  }

  getProducts(brandId: number): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.productsPath + '/GetProductsByBrand?BrandId=' + brandId);
  }

  getAll(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.productsPath + '/all');
  }

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(this.productsPath + '/' + id);
  }

  editProduct(product: Product) {
    return this.http.put(this.productsPath, product);
  }

  deleteProduct(data) {
    let id = Number(data.productId);
    return this.http.delete(this.productsPath + '/' + id);
  }

  getHotProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.productsPath + '/hot');
  }

  getProductsDroppingShortly(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.productsPath + '/soon');
  }

  getJustAnnouncedProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.productsPath + '/justAnnounced');
  }

  updateVotes(product: Product): Observable<Product> {
    return this.http.put<Product>(this.productsPath + '/vote', product);
  }

  like(productId: number): Observable<Product> {
    return this.http.put<Product>(this.productsPath + '/like', productId);
  }

  dislike(productId: number): Observable<Product> {
    return this.http.put<Product>(this.productsPath + '/dislike', productId);
  }

  pickProducts(data) {
    let mainProductId = Number(data.mainProductId);
    let sideProductId = Number(data.sideProductId);
    return this.http.put(this.productsPath + '/pick', { mainProductId: mainProductId, sideProductId: sideProductId});
  }

  getProductsLikedByUser(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.productsPath + '/liked');
  }

  getEditorsPicks(): Observable<EditorsPicks> {
    return this.http.get<EditorsPicks>(this.productsPath + '/getPicks');
  }
}
