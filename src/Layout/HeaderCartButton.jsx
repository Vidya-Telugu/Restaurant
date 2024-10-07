import React from 'react';
import "./HeaderCartButton.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon component
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';  
//import cartfavicon from "../assets/carticon.png";
function HeaderCartButton() {
  return (
   <button className='cart-btn'>
    <span className='img-icon'><FontAwesomeIcon icon={faCartPlus} /></span>
    <span className='Cart-name'>Your Cart </span>
    <span className='items-count'>0</span>
   </button>
  )
}

export default HeaderCartButton
