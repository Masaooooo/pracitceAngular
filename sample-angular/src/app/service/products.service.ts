import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  fetchProducts(): Observable<any> {
    return this.http.get<any>(`${this.url}/products`)
  }

  fetchProductDetail(id): Observable<any> {
    return this.http.get<any>(`${this.url}/products/${id}`)
  }
}
