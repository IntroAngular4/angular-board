import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuditInterceptorService } from './audit-interceptor.service';
import { ObseratesComponent } from './obserates/obserates.component';
import { RatesRoutingModule } from './rates-routing.module';
import { RatesComponent } from './rates/rates.component';

@NgModule({
  declarations: [RatesComponent, ObseratesComponent],
  imports: [CommonModule, RatesRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuditInterceptorService,
      multi: true
    }
  ]
})
export class RatesModule {}
