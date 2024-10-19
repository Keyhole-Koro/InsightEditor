import React from 'react';
import { Circle, Anchor } from './components/form/low-level/forms';

function App() {
  return (
    <div>
      <h1>Circle Example</h1>
      <Circle radius={40} color="red" x={50} y={50} />
      <Circle radius={30} color="green" x={100} y={100} />
      <Circle radius={60} color="purple" x={200} y={150} />
      <Anchor x={100} y={100} />
    </div>
  );
}

export default App;
