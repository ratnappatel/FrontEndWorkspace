import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
import DisplayEmpDetails from './DisplayEmpDetails';

export default class ParentComponent extends Component {
  constructor(){
    super();
    this.state ={
      "id":102,
      "name":"Ratna",
      "subject":"Java FSD",
      "picture":"./assets/employee.jpg"
    };
  }

  render() {
    return (
      <div>
       
        <DisplayEmpDetails employee={this.state}/>
        <hr height="5px"></hr>
        <ChildComponent myProps="1st Child"/>
        <ChildComponent myProps="2nd Child"/>
        <ChildComponent myProps="3rd Child"/>
      </div>
    )
  }
}
