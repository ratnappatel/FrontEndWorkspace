import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         "name":"I am Parent Component Lift-UP Data From My Child Component To Me"
      }
    }
    getChildCallback=(childData)=>{
        this.setState({name:childData});

    }
  render() {
    return (
    <div>
        <h1>{this.state.name}</h1>
        <hr></hr>
        <ChildComponent callback={this.getChildCallback}></ChildComponent>
    </div>
    )
  }
}
