import React from 'react';
import './anchor.css'; // Optional: If you want to add custom styles

export const Anchor = ({ radius = 10, color = 'gray', x = 0, y = 0 }) => {
  return (
    <svg width={radius * 2} height={radius * 2} style={{ overflow: 'visible' }}>
      <circle cx={x} cy={y} r={radius} fill={color} />
    </svg>
  );
};
