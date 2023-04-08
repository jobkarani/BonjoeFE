import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { SharedModule } from '../shared/shared.module';
import { HomeaboutComponent } from './homeabout/homeabout.component';
import { AboutRoutingModule } from './about-routing.module';
import { CountToComponent } from './count-to/count-to.component';



@NgModule({
  declarations: [
    AboutComponent,
    HomeaboutComponent,
    CountToComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
