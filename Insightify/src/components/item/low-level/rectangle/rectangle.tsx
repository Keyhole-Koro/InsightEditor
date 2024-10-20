import React from 'react';
import './rectangle.css';
import { BaseItem, BaseItemClass  } from '@item/base-item';
import { RGBColor, rgb } from '@utils/color';

export class Rectangle extends BaseItemClass {
    width: number;
    height: number;
  
    constructor({
      width = 100,
      height = 100,
      ...rest
    }: Partial<BaseItem> & { width?: number, height?: number } = {}) {
      super({ ...rest });
      this.width = width;
      this.height = height;
    }
  
    render(): JSX.Element {
      return (
        <rect
          x={this.x}
          y={this.y}
          width={this.width}
          height={this.height}
          fill={rgb(this.color)}
          style={{ cursor: 'pointer' }}
        />
      );
    }
  }
