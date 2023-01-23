import React, { Component } from 'react'

export default class BasicUForm extends Component {
    constructor(props) {
        super(props);
        this.name=React.createRef();
        this.state={
            "fname":''
        }
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.setState({fname:this.name.current.value});
        console.log(this.name.current.value);
      };
  render() {
    return (
        <div>
            <h1>Basic Uncontrolled Form</h1>
            <form >
                <input type="text" name="name" ref={this.name}  />
                <button type="submit" >Submit</button>
            </form>  
            <p>{this.state.fname}</p>          
        </div>
    )
  }
}
