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

   /*  handleChange=(e)=>{
        var controlName=e.target.name;
        let value=e.target.value;
        this.setState({
            controlName :value
        });
    } */
    handleSubmit=(e)=>{
        e.preventDefault();
        addEmployee(this.state);
        
        console.log("Employee Details added."+this.state)
    }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <fieldset>
                <label>Enter Employee ID</label>
                <input type="text" name="id" 
                 onChange={e=>{this.setState({id: e.target.value});}}></input>
            </fieldset>
            <fieldset>
                <label>Enter Employee Name</label>
                <input type="text" name="name"
                 onChange={e=>{this.setState({name: e.target.value});}}></input>
            </fieldset>
            <fieldset>
                <label>Enter Employee Designation</label>
                <input type="text" name="desig" 
                 onChange={e=>{this.setState({desig: e.target.value});}}></input>
            </fieldset>
            <fieldset>
                <label>Enter Employee Salary</label>
                <input type="text" name="salary" 
                 onChange={e=>{this.setState({salary: e.target.value});}}></input>
            </fieldset>
            <button type="Submit">Add Employee</button>

        </form>
      </div>
    )
  }
}
