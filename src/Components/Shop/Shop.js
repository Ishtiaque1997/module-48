import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
 
 //set state for products
 const[products,setProducts]=useState([]);

 //set state for cart
 const[cart,setCart]=useState([]);

 //loading data from fake data
 useEffect(()=>{
   fetch('./products.JSON')
   .then(res=>res.json())
   .then(data=>setProducts(data))
 },[])

 //handle the button of cart
 const handleAddToCart=(product)=>{
     const newCart=[...cart,product];
     setCart(newCart);
}

 return (
  <div className='Shop-container'>
   <div className='Product-container'>
    {
     products.map(product=>
    <Product 
      key={product.key}//unique key
      handleAddToCart={handleAddToCart}//props for the event handler
      product={product}>
    </Product>)
    }
   </div>
   <div className='cart-container'>
     <Cart cart={cart}></Cart>
   </div> 
  </div>
 );
};

export default Shop;