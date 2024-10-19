import { BaseItem } from '@item/base-item';

class ItemManager {
    private items: BaseItem[] = [];
  
    addItem(item: BaseItem): void {
      this.items.push(item);
    }
  
    removeItem(item: BaseItem): void {
      this.items = this.items.filter(i => i !== item);
    }
  
    renderAll(): JSX.Element[] {
      return this.items.map(item => item.render());
    }
  }
  
export default ItemManager;