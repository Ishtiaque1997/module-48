import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
 return (
  <div>
   <h1>This is header</h1>
   <img src={logo}alt="" />
  </div>
 );
};

export default Header;