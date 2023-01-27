import React, { Component } from 'react';
import './LoginPage.css'

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoggedIn: true
        };
      }
    handleClick=()=>{
        this.setState({isLoggedIn:false});
    }
      render() {
        let {isLoggedIn} = this.state;

        const renderAuthButton = () => {
          if (isLoggedIn) 
            return <button>Logout</button>;
          else 
            return <button>Login</button>;
         }
    
        return (
          <div className="App">
            <h1>
              This is a Demo showing several ways to implement Conditional Rendering in React.
            </h1>
            {renderAuthButton()}
            <hr></hr>
            <button onClick={this.handleClick}>Change LoggedIn Status</button>
        </div>
        );
      }
    }
