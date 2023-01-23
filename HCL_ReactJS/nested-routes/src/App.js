
import './App.css';
import ProductList from './ProductList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div>
     <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
        <hr />
        </div>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/categories' element={<ProductList/>}></Route>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
