import '../App.css';
import { useSearchParams } from "react-router";
import { Link } from "react-router";
import cartWhite from "../assets/cart-white.svg";
import magnify from "../assets/magnify.svg";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Navbar() {
  const [ searchParams, setSearchParams ] = useSearchParams("");
  const { basketItemCount } = useContext(CartContext);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.value;
    setSearchParams({ q: query });
  }

  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/"><h1>ArandomShop.</h1></Link>
        <Link to="/">Home</Link>
        <Link to="/Products">Products</Link>
      </div>
      <div className="navbar-right">
        <label> <img src={magnify} height="16px"/>
          <input 
            name="name" 
            id="search" 
            placeholder="search"
            onChange={(e) => handleSearch(e)}
          />
        </label>
        <div>
          <Link to="/Cart"><img src={cartWhite} height="24px"/></Link>
          {basketItemCount ? <p className="basket-count">{basketItemCount}</p> : ""}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
