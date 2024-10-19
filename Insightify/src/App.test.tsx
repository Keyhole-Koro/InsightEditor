// src/MyComponent.tsx

import React from 'react';

// Define the props interface
interface MyComponentProps {
  title: string;
  count?: number; // optional prop
}

// Create the functional component
const MyComponent: React.FC<MyComponentProps> = ({ title, count = 0 }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
    </div>
  );
};

export default MyComponent;
