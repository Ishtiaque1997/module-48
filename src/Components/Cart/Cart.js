import React from 'react';
import './Cart.css';

const Cart = (props) => {
 const{cart}=props;
 const total=cart.reduce((previous,product)=>previous+product.price,0);
 // let total=0;
 // for(const product of cart){
 //  total=total+product.price;
 // }
 return (
  <div>
      <h3>Order Summary: </h3>
     <h5>{props.cart.length}</h5>
     <br />
     <p>Total:{total}</p>

  </div>
 );
};

export default Cart;