import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiUrl = `${environment.API_URL}/categories`

  constructor(
    private http: HttpClient
  ) { }

  getAllCategories() {
    let params = new HttpParams()
    return this.http.get<Category[]>(this.apiUrl, {params})
  }
}
