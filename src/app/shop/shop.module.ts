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
import { FridgesComponent } from './fridges/fridges.component';
import { FridgecategoriesComponent } from './fridgecategories/fridgecategories.component';
import { FridgeDetailsComponent } from './fridge-details/fridge-details.component';
import { HomeappliancesComponent } from './homeappliances/homeappliances.component';
import { HomeappliancescategoriesComponent } from './homeappliancescategories/homeappliancescategories.component';
import { HomeapplianceDetailsComponent } from './homeappliance-details/homeappliance-details.component';



@NgModule({
  declarations: [
    ShopComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CategoriesComponent,
    PhonesComponent,
    PhonecategoriesComponent,
    FridgesComponent,
    FridgecategoriesComponent,
    FridgeDetailsComponent,
    HomeappliancesComponent,
    HomeappliancescategoriesComponent,
    HomeapplianceDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,
    NgxPaginationModule,
  ]
})
export class ShopModule { }
