import React from 'react';
import {PropTypes} from 'prop-types';

function Product(props) {
  return (
    <div>
        <ul>
            <li>{props.id}</li>
            <li>{props.title}</li>
            <li>{props.price}</li>
            <li>{props.rating}</li>
        </ul>
    </div>
  )
}
Product.defaultProps={
    title:"default title",
    price:1000,
    rating:0
}
Product.propTypes={
   id:PropTypes.number.isRequired,
   title:PropTypes.string,
   price:PropTypes.number,
   rating: PropTypes.number
}


export default Product;