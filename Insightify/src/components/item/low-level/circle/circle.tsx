import React from 'react';
import { BaseItem, BaseItemClass  } from '../../base-item';
import './circle.css';
import { Colors, rgb } from '@utils/color';

export class Circle extends BaseItemClass {
    radius: number;
  
    constructor({
      radius = 50,
      ...rest
    }: Partial<BaseItem> & { radius?: number } = {}) {
      super({ ...rest });
      this.radius = radius;
    }
  
    render(): JSX.Element {
      return (
        <circle cx={this.x} cy={this.y} r={this.radius * this.scale} fill={rgb(this.color)} />
      );
    }
  }