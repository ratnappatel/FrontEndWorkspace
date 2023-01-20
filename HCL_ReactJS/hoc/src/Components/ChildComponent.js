import React, { Component } from 'react'
import Enhancer from './Enhancer';

class ChildComponent extends Component {
  render() {
    return (
      <div>
        I am Child Component Which Gets Enhanced.
      </div>
    )
  }
}


ChildComponent=Enhancer(ChildComponent);
export default ChildComponent;