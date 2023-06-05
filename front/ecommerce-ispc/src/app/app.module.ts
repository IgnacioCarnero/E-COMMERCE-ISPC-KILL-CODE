import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { AddToCartModule } from './add-to-cart/add-to-cart.module';

import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import { RegisterComponent } from './auth/register/register.component';
import { SignupService } from './services/signup.service';

@NgModule({
  declarations: [AppComponent, RegisterComponent],
  providers: [SignupService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    PagesModule,
    AuthModule,
    HttpClientModule,
    AddToCartModule,
    FormsModule
  ],
})
export class AppModule {}
