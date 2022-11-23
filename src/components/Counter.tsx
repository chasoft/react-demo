import * as React from 'react';
import { useTestStore } from '../store';

function Counter(){
const myNumber = useTestStore((state) => state.myNumber)
console.log("Component: Counter - Re-render")
  return (
    <div
      style={{
        padding: '20px',
        margin: '20px',
        border: '1px solid #000',
      }}
    >
      my number is {myNumber}
    </div>
  );
}

export default React.memo(Counter)