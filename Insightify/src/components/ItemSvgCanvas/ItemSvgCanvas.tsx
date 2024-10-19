import ItemManager from "../managers/ItemManager";
import React from 'react';

export const SvgCanvas: React.FC<{ itemManager: ItemManager }> = ({ itemManager }) => {
  return (
    <svg>
      {itemManager.renderAll()}
    </svg>
  );
};

export default SvgCanvas;