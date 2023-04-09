import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { ShopComponent } from './shop.component';
import { PhonesComponent } from './phones/phones.component';
import { PhonecategoriesComponent } from './phonecategories/phonecategories.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { FridgesComponent } from './fridges/fridges.component';
import { FridgecategoriesComponent } from './fridgecategories/fridgecategories.component';
import { FridgeDetailsComponent } from './fridge-details/fridge-details.component';
import { HomeappliancesComponent } from './homeappliances/homeappliances.component';
import { HomeappliancescategoriesComponent } from './homeappliancescategories/homeappliancescategories.component';
import { HomeapplianceDetailsComponent } from './homeappliance-details/homeappliance-details.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
        { path: "",component:ProductsComponent},
        { path: 'product-details/:id', component: ProductDetailsComponent },
        { path: 'category-products/:id', component: CategoriesComponent },
        { path: 'phones', component: PhonesComponent },
        { path: 'phone-details/:id', component: PhoneDetailsComponent },
        { path: 'category-phones/:id', component: PhonecategoriesComponent },
        { path: 'fridges', component: FridgesComponent },
        { path: 'fridge-details/:id', component: FridgeDetailsComponent },
        { path: 'category-fridges/:id', component: FridgecategoriesComponent },
        { path: 'homeappliances', component: HomeappliancesComponent },
        { path: 'homeappliance-details/:id', component: HomeapplianceDetailsComponent },
        { path: 'category-homeappliances/:id', component: HomeappliancescategoriesComponent },
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}