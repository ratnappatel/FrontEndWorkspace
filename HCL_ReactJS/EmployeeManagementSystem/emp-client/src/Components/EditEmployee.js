import React, { Component } from 'react';
import {updateEmployeeDetails as update} from '../Services/employee';
import {withRouter} from 'react-router';

export default class EditEmployee extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         "id":0,
         "name":'',
         "desig":'',
         "salary":0
      }
    }
    componentDidMount(){
      console.log(this.props.match.params);
    }
    handleSubmit=()=>{
      update(this.state.id, this.state)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <fieldset>
                <label>Enter Employee ID</label>
                <input type="text" name="id" value={this.state.id}
                 onChange={e=>{this.setState({id: e.target.value});}}></input>
            </fieldset>
            <fieldset>
                <label>Enter Employee Name</label>
                <input type="text" name="name" value={this.state.name}
                 onChange={e=>{this.setState({name: e.target.value});}}></input>
            </fieldset>
            <fieldset>
                <label>Enter Employee Designation</label>
                <input type="text" name="desig"  value={this.state.desig}
                 onChange={e=>{this.setState({desig: e.target.value});}}></input>
            </fieldset>
            <fieldset>
                <label>Enter Employee Salary</label>
                <input type="text" name="salary" value={this.state.salary}
                 onChange={e=>{this.setState({salary: e.target.value});}}></input>
            </fieldset>
            <button type="Submit">Update Employee</button>
            </form>
      </div>
    )
  }
}

 EditEmployee=withRouter(EditEmployee);