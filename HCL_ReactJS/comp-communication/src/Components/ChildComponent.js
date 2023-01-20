import React, { Component } from 'react'

export default class ChildComponent extends Component {
    onFormSubmit=(e)=>{
        this.props.callback(e.target.compName.value);
        e.preventDefault();
    }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
            <input type="text" name="compName" placeholder='Enter Your Organization Name'></input><br></br>
            <input type="submit" value="Submit"></input>

        </form>
      </div>
    )
  }
}
