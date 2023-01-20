import React, { Component } from 'react'

export default class TwoWayDataBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         "title":"Great Learning"
      }
      this.cTitle=this.cTitle.bind(this);
    }
    cTitle(e)
    {
        this.setState({
            "title":e.target.value
        })
    }

    changeTitle=(e)=>{
        this.setState({
            "title":e.target.value
        })
    }
    
  render() {
    return (
      <div>
        <h1>Welcome to {this.state.title}</h1>
        <input type="text" onChange={this.changeTitle} ></input>
        <input type="text" onChange={this.cTitle} ></input>
      </div>
    )
  }
}
