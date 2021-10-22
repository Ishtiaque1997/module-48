import React from 'react';
import './Cart.css';

const Cart = (props) => {

 //access from props
 const{cart}=props;
 let totalQuantity=0;
 //mapping the cart array
//  const total=cart.reduce((previous,product)=>previous+product.price,0);

 let total=0;
 for(const product of cart){
 if(!product.quantity){
   product.quantity=1;
 }
  total=total+product.price*product.quantity;
  totalQuantity=totalQuantity+product.quantity;
 }
 
 const shipping=total>0?15:0;
 const tax=(total+shipping)*0.1;
 const grandTotal=total+shipping+tax;
 return (
  <div className='cart-details'>
     <h3>Order Summary: </h3>
     <h5>{totalQuantity}</h5>
     <br />
     <p>Total:{total.toFixed(2)}</p>
     <p>Shipping:{shipping}</p>
     <p>tax:{tax.toFixed(2)}</p>
     <h3>Final:{grandTotal.toFixed(2)}</h3>
  </div>
 );
};

export default Cart;