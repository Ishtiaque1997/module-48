import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {

 //access from props to display product
 const{name,img,seller,price,stock}=props.product;

 //font awesome icon
 const element=<FontAwesomeIcon icon={faShoppingCart} />
 // console.log(props)
 
 return (
  <div className='product'>
  <div>
    <img src={img} alt="" />
  </div>
  <div>
    <h4 className='product-name'>{name}</h4>
    <p><small>By:{seller}</small></p>
    <p>Price:{price}</p>
    <p><small>Only {stock} available. Order soon</small></p>
    <button className='btn-regular' onClick={()=>props.handleAddToCart(props.product)}>{element}Add to cart</button>
   </div>
   </div>
 );
};

export default Product;