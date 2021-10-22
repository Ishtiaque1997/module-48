import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const OrderReview = () => {
 const [products]=useProducts();
 const[cart,setCart]=useCart(products);
 return (
  <div>
   <h1>{products.length}</h1>
   <h4>{cart.length}</h4>
   <h3>This is order review</h3>
  </div>
 );
};

export default OrderReview;