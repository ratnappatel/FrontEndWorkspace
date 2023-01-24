import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import App from './App';
import About from './About';
import Contact from './Contact';
import Notfound from './Notfound';

const routing = (
  <BrowserRouter>
    <div>
      <h3>Great Learning</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about/1">About 1</Link>
        </li>
        <li>
          <Link to="/about/2">About 2</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about/:id?" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));