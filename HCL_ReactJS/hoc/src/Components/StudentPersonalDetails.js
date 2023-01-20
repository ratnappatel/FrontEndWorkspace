import React, { Component } from 'react'

import StudentDetails from './StudentDetails'
class StudentPersonalDetails extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         "name": "Ratna",
         "age": 42,
         "email": "ratna@gmail.com"
      }
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <h1>{this.state.email}</h1>
      </div>
    )
  }
}

StudentPersonalDetails=StudentDetails(StudentPersonalDetails);
export default StudentPersonalDetails;