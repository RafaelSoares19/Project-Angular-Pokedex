
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulo
import { SharedModule } from './../shared/shared.module';

//Module Routing
import { RoutimgModule } from './routing.module';

//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';




@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    RoutimgModule,
    SharedModule

  ]
})
export class PagesModule { }
