import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class TopsellingService {

  constructor(private http: HttpClient) {}

  getTopSelling() {
    return this.http.get<Product[]>('https://bonjoebe-api.up.railway.app/api_phones/').pipe(
      map(products => this.getRandomProducts(products, 5))
    );
  }

  getTopFridges() {
    return this.http.get<Product[]>('https://bonjoebe-api.up.railway.app/api_fridges/').pipe(
      map(products => this.getRandomProducts(products, 5))
    );
  }

  getTopHomeAppliances() {
    return this.http.get<Product[]>('https://bonjoebe-api.up.railway.app/api_homeAppliances/').pipe(
      map(products => this.getRandomProducts(products, 5))
    );
  }

  getRandomProducts(products: Product[], count: number): Product[] {
    const randomProducts: Product[] = [];
    const maxIndex = products.length - 1;
  
    while (randomProducts.length < count) {
      const randomIndex = Math.floor(Math.random() * maxIndex);
      const product = products[randomIndex];
      if (!randomProducts.includes(product)) {
        randomProducts.push(product);
      }
    }
  
    return randomProducts;
  }
}
