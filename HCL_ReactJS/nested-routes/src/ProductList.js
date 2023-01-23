import React from 'react';
import {
    Routes,
    Route,
    Link,
    useMatch
  } from "react-router-dom";
import ProductDetails from './ProductDetails';

function ProductList() {
let {path, url} =useMatch();

  return (
    <div>
        <h2>List of Electronic Produicts</h2>
        <ul>
            <li><Link to={`${url}/washingmachine`}>Washing Machine</Link></li>
            <li><Link to={`${url}/refridgerator`}>Refridgerator</Link></li>
            <li><Link to={`${url}/HomeTheatre`}>Home Theatre</Link></li>
        </ul>

        <Routes>
            <Route exact path={path}>
            <h3>Please select a Category.</h3>
            </Route>
            <Route path={`${path}/:pid`}>
            <ProductDetails />
            </Route>
      </Routes>
    </div>
  )
}

export default ProductList;