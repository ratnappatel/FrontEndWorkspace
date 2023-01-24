import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SubContact from './SubContact';

class Contact extends Component {
  render() {
    return <div>
      <h4>Contact</h4>
      <p>This is Contact page.</p>
      <p>Select contact from below list</p>
      <ul>
        <li>
          <Link to="/contact/1">Contact 1 </Link>
        </li>
        <li>
          <Link to="/contact/2">Contact 2 </Link>
        </li>
        <li>
          <Link to="/contact/3">Contact 3 </Link>
        </li>
      </ul>
      <Route path="/contact/:id" component={SubContact} />
    </div>
  }
}

export default Contact;