import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConverterRoutingModule } from './converter-routing.module';
import { ConverterComponent } from './converter/converter.component';

@NgModule({
  declarations: [ConverterComponent],
  imports: [CommonModule, ConverterRoutingModule, FormsModule]
})
export class ConverterModule {}
