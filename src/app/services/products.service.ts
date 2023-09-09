import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = `${environment.API_URL}`

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts (){
    return this.http.get<Product[]>(`${this.apiUrl}/products`)
  }
  getProductsByCateogory(categoryId: string) {
    let params = new HttpParams()
    return this.http.get<Product[]>(`${this.apiUrl}/categories/${categoryId}/products`, {params})
  }
}


