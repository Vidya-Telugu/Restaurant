import React from 'react'
import HeaderCartButton from "./HeaderCartButton";
//import imageforheader from "../assets/imageforheader.jpg";
import "./Header.css";
function Header() {
  return (
    <div className="container">
      <header className="header">
        <h3>React Restaurant</h3>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className='card-desc'>
          <h3 className="desc-heading">Delicious Food,Delivered To You</h3>
          <p className='desc-content'>Choose your favourite meal from broad selection of available meals and
            enjoy a delicious lunch or meal at home.</p>
            <p>All our meals are cooked with high quality ingredients just-in-time 
              and ofcourse by experienced chefs</p>
      </div>
    </div>
  )
}

export default Header
