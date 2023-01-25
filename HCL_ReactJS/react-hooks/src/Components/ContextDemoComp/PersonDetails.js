import React,{useState,useContext} from 'react'

var ctx=React.createContext(null);

export default function PersonDetails() {
    var [personDetails]=useState({
        name:"Varni",
        age:42
    });
  return (
    <ctx.Provider value={personDetails}>
    <div>   
        <PersonDetailsChild ></PersonDetailsChild>
    </div>
    </ctx.Provider>
  )
}
function PersonDetailsChild(props) {
    return (
      <div>
       <h1>Nested Child Component Getting Person Details</h1>
               <NestedChildPD />
          
      </div>
    )
  }

  function NestedChildPD(props) {
    var ctxData=useContext(ctx);
  return (
    <div>
        <h2>Person Details are :</h2>
        <h4>Person Name :{ctxData.name} </h4>
        <h4>Person Age :{ctxData.age} </h4>
    </div>
  )
}