import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RectangleComponent } from './components/low-level/rectangle/rectangle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RectangleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Insightify';
}