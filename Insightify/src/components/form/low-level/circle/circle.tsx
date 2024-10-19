import React from 'react';
import './circle.css'; // Optional: If you want to add custom styles

export const Circle = ({ radius = 50, color = 'blue', x = 0, y = 0 }) => {
  return (
    <svg width={radius * 2} height={radius * 2} style={{ overflow: 'visible' }}>
      <circle cx={x} cy={y} r={radius} fill={color} />
    </svg>
  );
};