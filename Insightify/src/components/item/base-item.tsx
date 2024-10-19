import { RGBColor, Colors } from "../utils/color";

// Define the interface for dependencies
export interface BaseItem {
    parent: BaseItem | undefined;        // Optional parent to allow root forms without a parent
    children: BaseItem[];     // Use an array to hold child forms

    x: number;
    y: number;
    scale: number;
    color: RGBColor;

    render(): JSX.Element;
}

export class BaseItemClass implements BaseItem {
    x: number;
    y: number;
    scale: number;
    color: RGBColor;
    parent: BaseItem | undefined;
    children: BaseItem[] = [];
  
    constructor({
      x = 0,
      y = 0,
      scale = 1,
      color = Colors.gray,
      parent = undefined,
      children = [],
    }: Partial<BaseItem> = {}) {
      this.x = x;
      this.y = y;
      this.scale = scale;
      this.color = color;
      this.parent = parent;
      this.children = children;
    }
  
    render(): JSX.Element {
      return <></>;
    }
  }
  