import React from 'react'
import HeaderCartButton from "./HeaderCartButton";
import imageforheader from "../assets/imageforheader.jpg";
import "./Header.css";
function Header() {
  return (
    <div className="container">
      <header>
        <h3>ReactMeals</h3>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className="img-div">
        <img src={imageforheader}></img>
      </div>
    </div>
  )
}

export default Header
