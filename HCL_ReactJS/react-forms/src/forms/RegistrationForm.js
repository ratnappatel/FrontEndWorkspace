import React, { Component } from 'react'

export default class RegistrationForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         "id":0,
         "name":'',
         "desig":'',
         "salary":0.0
      }
    }
    changeHandler= e=>{
        const name=e.target.name;
        const value=e.target.value;
        this.setState(
            {
               name:value
            }
        );
    }
    handleSubmit=e=>{
        e.preventDefault();
        console.log("ID: "+this.state.id+
        ", Name:"+this.state.name+", Desig: "+this.state.desig+", Salary: "+this.state.salary);
    }
  render() {
    return (
      <div>
        <h1>Employee RegistrationForm [Controlled Form]</h1>
      <form onSubmit={this.handleSubmit}>
        <fieldset>
                <label>Enter Employee ID</label>
                <input type="text" name="id" value={this.state.id} 
                onChange={e=>this.setState({id:e.target.value})}></input>
        </fieldset>
        <fieldset>
                <label>Enter Employee NAME</label>
                <input type="text" name="name" value={this.state.name} 
                onChange={e=>this.setState({name:e.target.value})}></input>
        </fieldset>
        <fieldset>
                <label>Enter Employee Desig</label>
                <input type="text" name="desig" value={this.state.desig} 
                onChange={e=>this.setState({desig: e.target.value})}></input>
        </fieldset>
        <fieldset>
                <label>Enter Employee SALARY</label>
                <input type="text" name="salary" value={this.state.salary} 
                onChange={e=>this.setState({salary:e.target.value})}></input>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      </div>
    )
  }
}
