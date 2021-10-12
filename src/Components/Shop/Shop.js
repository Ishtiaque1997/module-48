import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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
  
 useEffect(()=>{
   const savedCart=getStoredCart();
   for (const key in savedCart){
     const addedProduct=products.find(product=>product.key===key);
     console.log(key,addedProduct)
   }
 },[])



 //handle the button of cart
 const handleAddToCart=(product)=>{
     const newCart=[...cart,product];
     setCart(newCart);
     //save to local database
     addToDb(product.key);
}

 return (
  <div className='shop-container'>
   <div className='product-container'>
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