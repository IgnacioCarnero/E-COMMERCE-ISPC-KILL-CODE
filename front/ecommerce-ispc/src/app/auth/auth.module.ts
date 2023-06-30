import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule],
  exports: [RegisterComponent, LoginComponent],
  providers: [RegisterService]
})
export class AuthModule {}
