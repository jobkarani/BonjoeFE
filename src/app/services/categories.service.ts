import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoryproducts } from '../interfaces/category-products';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  id:number =0;

  constructor(private http :HttpClient) { }

  getCategoryProducts(id:number): Observable<Categoryproducts[]> {
    return this.http.get<Categoryproducts[]>('https://bonjoebe-api.up.railway.app/api_categoryproducts/' + id);
  }

  getCategoryPhones(id:number): Observable<Categoryproducts[]> {
    return this.http.get<Categoryproducts[]>('https://bonjoebe-api.up.railway.app/api_categoryphones/' + id);
  }

  getCategoryFridges(id:number): Observable<Categoryproducts[]> {
    return this.http.get<Categoryproducts[]>('https://bonjoebe-api.up.railway.app/api_categoryfridges/' + id);
  }

  getCategoryHomeAppliances(id:number): Observable<Categoryproducts[]> {
    return this.http.get<Categoryproducts[]>('https://bonjoebe-api.up.railway.app/api_categoryhomeAppliances/' + id);
  }
}
