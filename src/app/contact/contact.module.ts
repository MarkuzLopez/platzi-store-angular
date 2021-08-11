import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './app.contact.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule
  ],
  exports: [ 
    ContactComponent
  ]
})
export class ContactModule { }
