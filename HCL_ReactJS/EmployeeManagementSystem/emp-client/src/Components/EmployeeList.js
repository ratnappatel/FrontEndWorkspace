import React, { Component } from 'react';

import  { getAllEmployee } from '../Services/employee';
import AddEmployee from './AddEmployee';
import EmployeeTable from './EmployeeTable';

export default class EmployeeList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         "employees":[]
      }
    }
    componentDidMount() {
       getAllEmployee().then(res => {
            const arr = res.data;
            console.log(arr);
            this.setState({ employees: arr });
          })
      }

  render() {
    return (
      <div>
       
        <h1>Employees List</h1>
        <EmployeeTable emps={this.state.employees}/> 
        <AddEmployee/>
        
      </div>
    )
  }
}
