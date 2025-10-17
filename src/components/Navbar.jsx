import { useState } from 'react';
import '../App.css';
import { Link } from 'react-router';
import cartImg from "../assets/shopping-outline.svg";
import magnify from "../assets/magnify.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/"><h1>ArandomShop.</h1></Link>
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
      </div>
      <div className="navbar-right">
        <label> <img src={magnify} height="16px"/>
          <input name="name" id="name" placeholder="search"/>
        </label>
        <Link to="/Cart"><img src={cartImg} height="24px"/></Link>
      </div>
    </div>
  )
}

export default Navbar;
