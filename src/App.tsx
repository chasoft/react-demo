import React from 'react';
import './App.css';
import Counter from './components/Counter';
import FirstName from './components/FirstName';
import LastName from './components/LastName';
import { useStoreActions } from './store';
import Age from './components/Age';

function App() {
  const {happyBirthday, updateFirstname, incMyNumber } = useStoreActions()
  const [newFirstName, setNewFirstName] = React.useState("")
  console.log('App re-render');
  return (
    <div>
      <Counter />
      <FirstName />
      <LastName />
      <Age/>
      <input value={newFirstName} onChange={(e)=>setNewFirstName(e.target.value)} />
      <button onClick={happyBirthday}>Happy Birthday</button>
      <button onClick={() => updateFirstname(newFirstName)}>update First Name</button>
      <button onClick={incMyNumber}>increase My number</button>
    </div>
  );
}

export default App;
