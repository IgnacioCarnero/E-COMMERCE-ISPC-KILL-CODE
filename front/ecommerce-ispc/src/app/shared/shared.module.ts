import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [NavComponent, FooterComponent],
  imports: [CommonModule, AuthModule],
  exports: [NavComponent, FooterComponent],
})
export class SharedModule {}
