import {BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
      <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/About'>About Us</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact Us</Link>
          </li>
      </ul>
      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/About' element={<About/>}></Route>
          <Route exact path='/Contact' element={<Contact/>}></Route>
          <Route exact path='/*' element={<NotFound/ >}/>
      </Routes>     
      </div>
    </Router>
  );
}
export default App;
