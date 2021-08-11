import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { AppRouterModule } from './app.routes.module';
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';
import { DetailComponent } from './detail/detail.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    PageNoFoundComponent,    
    LayoutComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
