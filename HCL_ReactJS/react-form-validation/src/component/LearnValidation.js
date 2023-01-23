import React, { Component } from 'react'

export default class LearnValidation extends Component {
constructor(props) {
  super(props)

  this.state = {
     "name":'',
     "nameError":'',
     "nameValid": false
  }
}

handleChange =(e)=>{
    this.setState({name:e.target.value},this.validateName);
}

validateName=(e)=>
{
    let er=e.target.value.length<6?"Entered Name is Not Valid":""
    this.setState({nameError:er});
    if(er === "")
        this.setState({nameValid:true});
    return this.state.nameValid;
}
  render() {
    return (
      <div>
        <form>
            <label>Enter Your Name</label>
            <div style={{color:"red"}}>{this.state.nameError}</div>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
