import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         "count":100
      }
       this.handleIncrement=this.handleIncrement.bind(this);
       this.handleDecrement=this.handleDecrement.bind(this);
    }
    handleIncrement()
    {
       //this.state.count++;
       this.setState({count:this.state.count+1});
       console.log(this.state.count);
    }
    handleDecrement()
    {
        //this.state.count--;
        this.setState({count:this.state.count-1});
        console.log(this.state.count);
    }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <input type="button" value="Increament" onClick={this.handleIncrement}/> 
        <input type="button" value="Decrement" onClick={this.handleDecrement}/>
      </div>
    )
  }
}
