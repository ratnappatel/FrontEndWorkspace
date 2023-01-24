import React, { Component } from 'react';
import { addEmployee } from '../Services/employee';

export default class AddEmployee extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            "id":0,
            "name":'',
            "desig":'',
            "salary":0
         }
    }

    handleChange=(e)=>{
        let controlName=e.target.name;
        let value=e.target.value;
        this.setState({
            controlName :value
        });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        addEmployee(this.state.employee);
        console.log("Employee Details added.")
    }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <fieldset>
                <label>Enter Employee ID</label>
                <input type="text" name="employee.id" value={this.state.id}
                 onChange={this.handleChange}></input>
            </fieldset>
            <fieldset>
                <label>Enter Employee Name</label>
                <input type="text" name="employee.name" value={this.state.name}
                 onChange={this.handleChange}></input>
            </fieldset>
            <fieldset>
                <label>Enter Employee Designation</label>
                <input type="text" name="employee.desig" value={this.state.desig}
                 onChange={this.handleChange}></input>
            </fieldset>
            <fieldset>
                <label>Enter Employee Salary</label>
                <input type="text" name="employee.salary" value={this.state.salary}
                 onChange={this.handleChange}></input>
            </fieldset>
            <button type="Submit">Add Employee</button>

        </form>
      </div>
    )
  }
}
