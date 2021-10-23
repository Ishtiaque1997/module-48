import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { addToDb, getStoredCart } from '../../utilities/fakedb';
import {addToDb,getStoredCart} from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
 
 //set state for products
 const[products,setProducts]=useState([]);

 //set state for cart
 const[cart,setCart]=useState([]);

 //set state for search
 const[displayProducts,setDisplayProducts]=useState([])

 //loading data from fake data
 useEffect(()=>{
   console.log('product api called')
   fetch('./products.JSON')
   .then(res=>res.json())
   .then(data=>{
     setProducts(data)
    //  console.log('products received')
    setDisplayProducts(data);
   })
 },[])
  
 useEffect(()=>{
  //  console.log('local storage called')
   if(products.length){
     const savedCart=getStoredCart();
     const storedCart=[];

   for (const key in savedCart){
     const addedProduct=products.find(product=>product.key===key);
     if(addedProduct){
      const quantity=savedCart[key];  
      addedProduct.quantity=quantity;
      console.log(addedProduct)
      storedCart.push(addedProduct)
     }
     
   }
   setCart(storedCart);
   }
 },[products])



 //handle the button of cart
 const handleAddToCart=(product)=>{
   const exists=cart.find(pd=>pd.key===product.key);
   let newCart=[];
   if(exists){
     const rest=cart.filter(pd=>pd.key!==product.key);
     exists.quantity=exists.quantity+1;
     newCart=[...rest,product];
   }
   else{
   product.quantity=1;
   newCart=[...cart,product];
   }
     setCart(newCart);
     //save to local database
     addToDb(product.key);
}
const handleSearch=event=>{
  const searchText=event.target.value;
  const matchedProducts=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
  console.log(matchedProducts.length);
  setDisplayProducts(matchedProducts)
}

 return (
   <>
     <div className='search-container'>
     <input 
     onChange={handleSearch}
     type="text" placeholder='Search Product'/>

   </div>

  <div className='shop-container'>
   <div className='product-container'>
    {
        displayProducts.map(product=>
         <Product 
           key={product.key}//unique key
           handleAddToCart={handleAddToCart}//props for the event handler
           product={product}>
         </Product>)
    }
   </div>
   <div className='cart-container'>
     <Cart cart={cart}>
       <Link to ='/review'>
         <button className='btn-regular'>Review your order</button>
       </Link>
     </Cart>
   </div> 
  </div>
   </>
 );
};

export default Shop;