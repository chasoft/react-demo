import * as React from 'react';
import { useTestStore } from '../store';

function FirstName() {
  const firstname = useTestStore((state) => state.myProfile.firstname);
  console.log("Component: FirstName - Re-render")
  return (
    <div
      style={{
        padding: '4px',
        margin: '4px',
        border: '1px solid #000',
      }}
    >
      <div>Firstname: {firstname}</div>
    </div>
  );
}

export default React.memo(FirstName)