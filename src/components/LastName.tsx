import * as React from 'react';
import { useTestStore } from '../store';

function LastName() {
  const lastname = useTestStore((state) => state.myProfile.lastname);
  console.log("Component: LastName - Re-render")
  return (
    <div
      style={{
        padding: '4px',
        margin: '4px',
        border: '1px solid #000',
      }}
    >
      <div>Lastname: {lastname}</div>
    </div>
  );
}

export default React.memo(LastName)