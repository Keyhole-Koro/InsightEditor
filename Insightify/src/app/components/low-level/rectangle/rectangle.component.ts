import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  standalone: true,
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss']
})
export class RectangleComponent {
  // Input properties to allow dynamic settings
  @Input() x: number = 0;             // X position of the rectangle
  @Input() y: number = 0;             // Y position of the rectangle
  @Input() width: number = 100;       // Width of the rectangle
  @Input() height: number = 50;       // Height of the rectangle
  @Input() color: string = 'lightgray'; // Fill color of the rectangle
} 