import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService {

  id:number = 0;

  constructor(private http:HttpClient) { }

  getProductDetails(id:number): Observable<Product[]> {
    return this.http.get<Product[]>('https://bonjoebe-api.up.railway.app/getProductDetails/' + id);
  }

  getPhoneDetails(id:number): Observable<Product[]> {
    return this.http.get<Product[]>('https://bonjoebe-api.up.railway.app/getPhoneDetails/' + id);
  }

  getFridgeDetails(id:number): Observable<Product[]> {
    return this.http.get<Product[]>('https://bonjoebe-api.up.railway.app/getFridgeDetails/' + id);
  }

  getHomeApplianceDetails(id:number): Observable<Product[]> {
    return this.http.get<Product[]>('https://bonjoebe-api.up.railway.app/getHomeAppliancesDetails/' + id);
  }
}
