import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from './add-to-cart.component';

import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [AddToCartComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [AddToCartComponent],
})
export class AddToCartModule { }
