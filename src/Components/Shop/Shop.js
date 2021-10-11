import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
 const[products,setProducts]=useState([]);
 useEffect(()=>{
   fetch('./products.JSON')
   .then(res=>res.json())
   .then(data=>setProducts(data))
 },[])
 return (
  <div className='Shop-container'>
   <div className='Product-container'>
    {
     products.map(product=><Product product={product}></Product>)
    }
   </div>
   <div className='cart-container'>
     <h3>Order Summary: </h3>
   </div>
   
  </div>
 );
};

export default Shop;