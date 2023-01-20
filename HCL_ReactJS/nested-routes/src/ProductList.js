import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Swict,
    Route,
    Link,
    useParams,
    useRouteMatch
} from 'react-router-dom';

function ProductList() {
let {path, url} =useRouteMatch();

  return (
    <div>
        <h2>List of Electronic Produicts</h2>
        <ul>
            <li><Link to="{`${url}/wm`}">Washing Machine</Link></li>
        </ul>
    </div>

  )
}

export default ProductList