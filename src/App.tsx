import React from 'react';
import './App.css';
import Counter from './components/Counter';
import FirstName from './components/FirstName';
import LastName from './components/LastName';
import { useStoreActions } from './store';
import Age from './components/Age';
import MyCom from './components/MyCom';

function App() {
  const { happyBirthday, updateFirstname, incMyNumber } = useStoreActions()
  const [newFirstName, setNewFirstName] = React.useState("")
  const [num, setNum] = React.useState(0)
  console.log('App re-render');
  return (
    <div>
      {/* <Counter />
      <FirstName />
      <LastName />
      <Age/>
      <input value={newFirstName} onChange={(e)=>setNewFirstName(e.target.value)} />
      <button onClick={happyBirthday}>Happy Birthday</button>
      <button onClick={() => updateFirstname(newFirstName)}>update First Name</button>
      <button onClick={incMyNumber}>increase My number</button> */}
      
<button onClick={()=>setNum(n => n + 1)}>{num} - increase My number</button>

      <MyCom anAction={() => {
        const random = Math.random();
        return String(random)
      }} />
    </div>
  );
}

export default App;
