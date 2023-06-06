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
import { ReactiveFormsModule } from '@angular/forms';
// import { DashboardComponent } from './pages/dashboard/dashboard.component'; */

@NgModule({
  declarations: [AppComponent],
  providers: [],
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
    ReactiveFormsModule,
    ],
})
export class AppModule {}
