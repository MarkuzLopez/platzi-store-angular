import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { MaterialModule } from '../material/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  exports: [ 
    ProductsComponent
  ]
})
export class ProductsModule { }
