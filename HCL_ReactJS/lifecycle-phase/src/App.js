
import { useState } from 'react';
import './App.css';
import ListComp from './Components/ListComp';

//import MyParentComponent from './Components/MyParentComponent';

function App() {

  const [components, setComponents]=useState(["Component - 1"]);
  let i=2;
  function addComponent()
  {
    i+=1;
    setComponents([...components, "Component - "+i]);
  }

  return (
    <div >
    <button onClick={addComponent} text="Call Component">Add Item</button>
    {components.map((item,i)=>{return (<ListComp key={item} text={item}/>)})}     
    </div>
  );
}

export default App;
