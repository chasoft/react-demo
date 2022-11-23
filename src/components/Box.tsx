import * as React from 'react';
import { useStoreActions, useTestStore } from '../store';

function Box() {
  const myNumber = useTestStore((state) => state.myNumber);
  const { incMyNumber} = useStoreActions()
  return (
    <div
      style={{
        padding: '20px',
        margin: '20px',
        border: '1px solid #000',
      }}
    >
      <div>my number is {myNumber}</div>
      <button onClick={incMyNumber}>Increase my number</button>
    </div>
  );
}

export default React.memo(Box)
