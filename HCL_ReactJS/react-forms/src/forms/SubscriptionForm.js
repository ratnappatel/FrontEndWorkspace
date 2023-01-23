import React, { Component } from 'react'

export default class SubscriptionForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         "firstName":'',
         "lastName":'',
         "about":'',
         "level":'',
         "technology":[],
         "freelancing":false

      }
    }
    
     handleChange=(evt)=> {
        const value =
          evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        this.setState({
          ...this.state,
          [evt.target.name]: value
        });
      }

  render() {
    return (
      <div>
        <h1>SubscriptionForm [Controlled Form]</h1>
        <form>
        <label>
          <div className="heading">First Name</div>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <div className="heading">Last Name</div>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <div className="heading">About</div>
          <textarea name="about" value={this.state.about} onChange={this.handleChange} />
        </label>
        <div>
          <div className="heading">Degree</div>
          <label>
            Bachelors
            <input
              type="radio"
              name="level"
              value="bachelors"
              checked={this.state.level === "bachelors"}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Masters
            <input
              type="radio"
              name="level"
              value="masters"
              checked={this.state.level === "masters"}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <label>
          <div className="heading">Technology</div>
          <select
            name="technology"
            onChange={this.handleChange}
            value={this.state.technology}>
            <option value="java">Java</option>
            <option value="dotnet">Dot Net</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
          </select>
        </label>
        <label>
          <div className="heading">Interested in Freelancing?</div>
          <input
            type="checkbox"
            name="freelancing"
            checked={this.state.freelancing}
            onChange={this.handleChange}
          />
        </label>
      </form>
      <pre>{JSON.stringify(this.state, null, 3)}</pre>
      </div>
    )
  }
}
