// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RectangleComponent } from './components/low-level/rectangle/rectangle.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RectangleModule, // Add the module here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
