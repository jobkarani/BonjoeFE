import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { ShippingComponent } from './shipping/shipping.component';
import { TopDealsComponent } from './top-deals/top-deals.component';
import { TopSellingComponent } from './top-selling/top-selling.component';
import { TopFridgesComponent } from './top-fridges/top-fridges.component';
import { TopHomeappliancesComponent } from './top-homeappliances/top-homeappliances.component';

@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent,
    CategoriesComponent,
    ShippingComponent,
    TopDealsComponent,
    TopSellingComponent,
    TopFridgesComponent,
    TopHomeappliancesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
