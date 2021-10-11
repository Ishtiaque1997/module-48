import React from 'react';
import './Product.css'
const Product = (props) => {
 const{name,img,seller,price,stock}=props.product;
 const handleAddToCart=()=>{
  console.log('btn clicked')
 }
 return (
  <div className='product'>
  <div>
    <img src={img} alt="" />
  </div>
   <div>
    <h4 className='product-name'>{name}</h4>
    <p><small>By:{seller}</small></p>
    <p>Price:{price}</p>
    <p><small>Only {stock} vailable. Order soon</small></p>
    <button className='btn-regular' onClick={handleAddToCart}>Add to cart</button>
   </div>

  </div>
 );
};

export default Product;