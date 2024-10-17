// src/app/rectangle.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RectangleComponent } from './rectangle/rectangle.component';

@NgModule({
  declarations: [RectangleComponent],
  imports: [CommonModule],
  exports: [RectangleComponent], // Export it so it can be used in other modules
})
export class RectangleModule {}
