import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private brandsPath = environment.apiUrl + 'brand';

  constructor(private http: HttpClient) { }

  getBrand(brandId: number): Observable<Brand> {
    return this.http.get<Brand>(this.brandsPath + '/' + brandId);
  }

  getAllBrands(): Observable<Array<Brand>> {
    return this.http.get<Array<Brand>>(this.brandsPath + '/all');
  }

  getHotBrands(): Observable<Array<Brand>> {
    return this.http.get<Array<Brand>>(this.brandsPath + '/hot');
  }

  like(brandId: number): Observable<Brand> {
    return this.http.put<Brand>(this.brandsPath + '/like', brandId);
  }

  dislike(brandId: number): Observable<Brand> {
    return this.http.put<Brand>(this.brandsPath + '/dislike', brandId);
  }
}
