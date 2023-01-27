import React, { Component } from 'react'

export default class MyComponent extends Component {
    
    constructor(props) {
        super(props);
         this.state = {
         title:this.props.title
      }
      console.log("I'm Constructor ==> During Initialization phase")
    }
    handleClick=(e)=>{
        console.log('Event  Fired');
        this.setState();
    }
  render() {
    console.log('Mounting Phase Started....');
    console.log("render method invoked.....")
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}
