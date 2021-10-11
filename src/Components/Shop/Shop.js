import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
 const[products,setProducts]=useState([]);
 const[cart,setCart]=useState([]);
 useEffect(()=>{
   fetch('./products.JSON')
   .then(res=>res.json())
   .then(data=>setProducts(data))
 },[])
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
     key={product.key}
     handleAddToCart={handleAddToCart}
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