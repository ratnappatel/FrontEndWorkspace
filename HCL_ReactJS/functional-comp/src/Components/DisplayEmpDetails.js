import React from 'react'

function DisplayEmpDetails(props) {
  return (
    <div id="emp">
        <img src={props.employee.picture} alt="employee"></img>
        <p>{props.employee.id}</p>
        <h5>{props.employee.name}</h5>
        <h6>{props.employee.subject}</h6>
    </div>
  )
}

export default DisplayEmpDetails