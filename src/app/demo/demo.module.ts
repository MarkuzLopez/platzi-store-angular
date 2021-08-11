import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DemoComponent } from './demo.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsModule } from '../products/products.module';
import { DemoRoutingModule } from './app.demo.routing';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductsModule,
    DemoRoutingModule
  ],
  exports: [ 
    DemoComponent
  ]
})
export class DemoModule { }
