import React from 'react';
import './Cart.css';

const Cart = (props) => {

 //access from props
 const{cart}=props;

 //mapping the cart array
 const total=cart.reduce((previous,product)=>previous+product.price,0);

 // let total=0;
 // for(const product of cart){
 //  total=total+product.price;
 // }

 const shipping=15;
 const tax=(total+shipping)*0.1;
 const grandTotal=total+shipping+tax;
 return (
  <div>
     <h3>Order Summary: </h3>
     <h5>{props.cart.length}</h5>
     <br />
     <p>Total:{total.toFixed(2)}</p>
     <p>Shipping:{shipping}</p>
     <p>tax:{tax.toFixed(2)}</p>
     <h3>Final:{grandTotal.toFixed(2)}</h3>
  </div>
 );
};

export default Cart;