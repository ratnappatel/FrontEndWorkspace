import React,{useState} from 'react';

export default function EmailComponent() {
    const [email,setEmail]=useState('ratnapatel@gmail.com');
  return (
    <div>
        <h1>React Hook Example 1</h1>
        <h2>Your Registerd Email is : {email}</h2>
        <input type="text" onChange={(e)=>setEmail(e.target.value)}></input>
    </div>
  )
}
