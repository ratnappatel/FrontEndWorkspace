import React ,{useState,useReducer} from 'react';

export default function UserReducerComp() {
    const initialState={number:5};

    const reducerMethod=(state, action)=>{
        if(action.type === 'increment')
            return {number: state.number + action.payload};
        else if(action.type === 'decrement')
            return {number: state.number - action.payload};
        else if(action.type === 'reset')
            return {number: 5}
    }

    const[count, setCount]=useState(5);
   const [state,dispatcher]=useReducer(reducerMethod,initialState);

   
  return (
    <div>
        <h1>Number : {state.number}</h1>
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(prev=>prev+1)}>+ With State</button>
        <button onClick={()=>dispatcher({type:'decrement',payload:1})}>- With Reducer</button>
        <button onClick={()=>dispatcher({type:'increment',payload:1})}>+ With Reducer</button>
        <button onClick={()=>dispatcher({type:'reset',payload:1})}>Reset With Reducer</button>
    </div>
  )
}
