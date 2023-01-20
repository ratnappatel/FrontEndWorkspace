import React, { Component } from 'react';
import StudentDetails from './StudentDetails';

class StudentAcademicDetails extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         "name": "Ratna",
         "stream": "IIT",
         "sem": 3
      }
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.stream}</h1>
        <h1>{this.state.sem}</h1>
      </div>
    )
  }
}

StudentAcademicDetails=StudentDetails(StudentAcademicDetails);
export default StudentAcademicDetails;