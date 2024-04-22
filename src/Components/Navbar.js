import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = ({quantity}) => {
  return (
    <div>
        <ul className='nav'>
            <li>Add Your Bag</li>
            <div style={{display:"flex"}}> 
            <li><FaCartArrowDown  className='cartIcon'/></li>
            <span className='cardQunatity'>{quantity}</span></div>
           
        </ul>
    </div>
  )
}

export default Navbar