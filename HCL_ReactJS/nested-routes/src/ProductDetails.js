import React from 'react';
import {useParams} from 'react-router-dom';

function ProductDetails() {
    let {pid}=useParams();
  return (
    <div>
        <h3>Displaying {pid} Details..</h3>
    </div>
  )
}

export default ProductDetails