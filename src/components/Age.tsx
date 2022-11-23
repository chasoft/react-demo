import * as React from 'react';
import { useTestStore } from '../store';

function Age() {
  const age = useTestStore((state) => state.myProfile.age);
  console.log("Component: Age - Re-render")
  return (
    <div
      style={{
        padding: '4px',
        margin: '4px',
        border: '1px solid #000',
      }}
    >
      <div>Age: {age}</div>
    </div>
  );
}

export default React.memo(Age)