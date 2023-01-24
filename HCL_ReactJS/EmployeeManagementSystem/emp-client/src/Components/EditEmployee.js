import React, { Component } from 'react';
import {getEmployeeDetails, updateEmployeeDetails as update} from '../Services/employee';
import withRouter from './withRouter';


 class EditEmployee extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        "employee":{
         "id":Number,
         "name":String,
         "desig":String,
         "salary":Number
        }
      }
    }
    componentDidMount(){
      getEmployeeDetails(this.props.params.id).then(res => {
        const arr = res.data;
        console.log(arr);
        this.setState({ employee: arr });
      });
      console.log(this.props.params.id);
    }
    handleSubmit=(e)=>{
      e.preventDefault();
      update(this.state.id, this.state);
      
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <fieldset>
                <label>Enter Employee ID</label>
                <input type="text" name="id" value={this.state.employee.id} readOnly
                 ></input>
            </fieldset>
            <fieldset>
                <label>Enter Employee Name</label>
                <input type="text" id="name" name="name" defaultValue={this.state.employee.name}
                 onChange={e=>{this.setState({name: e.target.value});}}></input>
            </fieldset>
            <fieldset>
                <label>Enter Employee Designation</label>
                <input type="text" id="desig" name="desig"  defaultValue={this.state.employee.desig}
                 onChange={e=>{this.setState({desig: e.target.value});}}></input>
            </fieldset>
            <fieldset>
                <label>Enter Employee Salary</label>
                <input type="text" id="salary" name="salary" defaultValue={this.state.employee.salary}
                 onChange={e=>{this.setState({salary: e.target.value});}}></input>
            </fieldset>
            <button type="Submit">Update Employee</button>
            </form>
      </div>
    )
  }
}

export default withRouter(EditEmployee);