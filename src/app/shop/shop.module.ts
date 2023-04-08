import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ShopComponent } from './shop.component';
import { SharedModule } from '../shared/shared.module';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoriesComponent } from './categories/categories.component';
import { PhonesComponent } from './phones/phones.component';
import { PhonecategoriesComponent } from './phonecategories/phonecategories.component';



@NgModule({
  declarations: [
    ShopComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CategoriesComponent,
    PhonesComponent,
    PhonecategoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,
    NgxPaginationModule,
  ]
})
export class ShopModule { }
