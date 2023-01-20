import React from 'react'
import { useParams } from 'react-router'

function UsersList1() {
    var {id}=useParams();
    var users=[
        {
            "id":1,
            "name":"Ghanshyam",
            "age":19
        },
        {
            "id":2,
            "name":"Varniraj",
            "age":11
        },
        {
            "id":3,
            "name":"Neelkanth",
            "age":21
        },
        {
            "id":4,
            "name":"Gargesh",
            "age":14
        }
       ]
  return (
    <div>
        {
            users.filter((user)=>user.id=id)
                .map((u)=>{
                  return(
                    <div>
                      <strong>User ID : </strong>{u.id}<br></br>
                      <strong>User Name : </strong>{u.name}<br></br>
                      <strong>User Age : </strong>{u.age}<br></br>
                    </div>
                  )
                })
           };
    </div>
  )
}

export default UsersList1