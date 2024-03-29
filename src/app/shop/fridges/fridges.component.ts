import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
import { HomecategoriesService } from 'src/app/services/homecategories.service';

@Component({
  selector: 'app-fridges',
  templateUrl: './fridges.component.html',
  styleUrls: ['./fridges.component.css']
})
export class FridgesComponent implements OnInit{
  products: Product[] = [];
  cats: Category[] = [];
  phonenumber: number = 254724087213;
  id:number = 0;

  title = 'pagination';
  page:number = 1;
  count:number = 0;
  itemscount:number = 200;
  itemcounts: any = [4,8,12,16,20]

  constructor(private http: HttpClient,private homecategoriesService: HomecategoriesService) {}

  ngOnInit(): void {
    this.homecategoriesService.getFridgeCategories().subscribe(data => {
      this.cats = data;
    });  
  // pagination 
  this.getData();

  }

  getData() {
    this.http.get<Product[]>('https://bonjoebe-api.up.railway.app/api_fridges/').subscribe(response => {
      this.products  = response;
    });
  }

  onNextPageChange(event:any) {
    this.page=event;
    this.getData();
  }

  onPageSizeChange(event:any) {
    this.itemscount = event.target.value;
    this.page = 1;
    this.getData();
  }
  // whatsapp 
  openWhatsApp( index:number) {
    window.open(`https://wa.me/${this.phonenumber}?text=Hello%2C%20I%20want%20to%20purchase%3A%0D%0A%0D%0A%20%20%20%20%20%20%20%20%20%C2%A0*Buy:*%20${this.products[index].name}%0A%20%20%20%20%20%20%20%20*Price:*%20KSh${this.products[index].new_price}%0A%20%20%20%20%20%20%20%20*URL:*%20https://bonjoe-fe.vercel.app/shop/product-details/${this.products[index].id}%2F%0D%0A%0D%0AThank%20you%21`, "_blank");
  }
}
