import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
// import { GeneradorReciboDeSueldoComponent } from './front/ecommerce-ispc/src/app/pages/home/generador-recibo-de-sueldo/generador-recibo-de-sueldo/generador-recibo-de-sueldo.component';

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
  ],
})
export class AppModule {}
