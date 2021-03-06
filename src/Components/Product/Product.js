import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {

 //access from props to display product
 const{name,img,seller,price,stock,star}=props.product;

 //font awesome icon
 const element=<FontAwesomeIcon icon={faShoppingCart} />
 // console.log(props)
 
 return (
  <div className='product'>
   <div>
    <img src={img} alt="" />
   </div>
   <div className='product-details'>
     <h4 className='product-name'>{name}</h4>
     <div className='infos'>
       <p><small>By:{seller}</small></p>
     <p>Price:{price}</p>
    <p><small>Only {stock} available. Order soon</small></p>
    <Rating 
    initialRating={star}
    readonly
    emptySymbol="far fa-star"
   fullSymbol="fas fa-star"
    >
    </Rating>
    <br />
    <button className='btn-regular' onClick={()=>props.handleAddToCart(props.product)}>{element}Add to cart</button>
     </div>
   </div>
   </div>
 );
};

export default Product;