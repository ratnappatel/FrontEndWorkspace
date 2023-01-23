import React, { Component } from 'react'

export default class BasicForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         "name":"abc"
      }
    }
  render() {
    return (
        <div className="container">
        <h1>Controlled Form</h1>
        <form >
          <fieldset>
            <label>Enter Your Name</label>
            <input name="name" value={this.state.name} required
            onChange={e=>{
              this.setState({name: e.target.value});
              console.log(this.state.name);
              }}/>
          </fieldset>
          <button type="submit" >Submit</button>
        </form>
        <h3>{this.state.name}</h3>
      </div>
    )
  }
}
