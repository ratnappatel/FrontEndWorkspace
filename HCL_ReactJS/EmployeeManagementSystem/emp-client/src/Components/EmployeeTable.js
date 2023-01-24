import React from 'react'

function EmployeeTable(props) {
  return (
    <table border="5px" style={{"border": "5px solid green"}}>
         <tbody>
        <tr><th>Employee ID</th><th>Employee Name</th><th>Designation</th><th>Employee's Salary</th>
        <th>Modify Details</th><th>Delete Details</th></tr>

        {props.emps.map((e)=>{
           return (<tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.desig}</td>
                <td>{e.salary}</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>)
        })}
        </tbody>
    </table>
  )
}

export default EmployeeTable