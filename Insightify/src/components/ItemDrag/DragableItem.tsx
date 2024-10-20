import React, { useState, useCallback } from 'react';
import { BaseItemClass } from '@item/base-item';
import { RGBColor } from '../utils/color';
export class Circle extends BaseItemClass {
    radius: number;
  
    constructor({ x, y, radius, color }: { x: number; y: number; radius: number; color: RGBColor }) {
      super({ x, y, color });
      this.radius = radius;
    }
  
    render(onDragStart?: (e: React.MouseEvent) => void, onDrag?: (e: React.MouseEvent) => void): JSX.Element {
      return (
        <circle
          cx={this.x}
          cy={this.y}
          r={this.radius}
          fill={`rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`}
          onMouseDown={onDragStart}
          onMouseMove={onDrag}
          style={{ cursor: 'grab' }}
        />
      );
    }
  }
  
  export class Rectangle extends BaseItemClass {
    width: number;
    height: number;
  
    constructor({ x, y, width, height, color }: { x: number; y: number; width: number; height: number; color: RGBColor }) {
      super({ x, y, color });
      this.width = width;
      this.height = height;
    }
  
    render(onDragStart?: (e: React.MouseEvent) => void, onDrag?: (e: React.MouseEvent) => void): JSX.Element {
      return (
        <rect
          x={this.x}
          y={this.y}
          width={this.width}
          height={this.height}
          fill={`rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`}
          onMouseDown={onDragStart}
          onMouseMove={onDrag}
          style={{ cursor: 'grab' }}
        />
      );
    }
  }