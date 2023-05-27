import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [RegisterComponent, LoginComponent],
})
export class AuthModule {}
