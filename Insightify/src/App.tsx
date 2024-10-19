import React from 'react';
import ItemManager from '@managers/ItemManager';
import SvgCanvas from '@components/ItemSvgCanvas/ItemSvgCanvas';
import { Circle } from '@llitems/items';
import { Colors } from '@utils/color'

const App: React.FC = () => {
  const itemManager = new ItemManager();

  itemManager.addItem(new Circle({ x: 100, y: 100, radius: 50, color: Colors.red }));
  itemManager.addItem(new Circle({ x: 200, y: 100, radius: 30, color: Colors.blue }));

  return (
    <div>
      <h1>Vector Items with SVG</h1>
      <SvgCanvas itemManager={itemManager} />
    </div>
  );
};

export default App;