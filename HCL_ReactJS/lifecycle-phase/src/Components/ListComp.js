import React, { Component } from 'react'

export default class ListComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        item:this.props.text
      }
      console.log('Constructor is invoked...')
    }
  render() {
    console.log('Render is invoked..')
    return (
        <div>
        <h1 key={this.state.item}>{this.state.item}</h1>
    </div>
    )
  }
}


