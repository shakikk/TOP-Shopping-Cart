import Navbar from "./Navbar";
import "../App.css";
import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router";
import { CartContext } from "./CartContext";
import coffeeGreen from "../assets/products/coffee-green.svg";
import coffeeYellow from "../assets/products/coffee-yellow.svg";
import coffeeRed from "../assets/products/coffee-red.svg";
import coffeeBrown from "../assets/products/coffee-brown.svg"
import cartBlack from "../assets/cart-black.svg";
import cartBlackFull from "../assets/cart-black-full.svg";

const products = [
  {name: "Regular coffee", description: "regular coffee to fuel your day", image: coffeeBrown, price: 3.99},
  {name: "Growth coffee", description: "who doesn't want extra height?", image: coffeeYellow, price: 9.99},
  {name: "Shrink coffee", description: "feeling tall?", image: coffeeBrown, price: 7.99},
  {name: "Super strength coffee", description: "lift a house", image: coffeeGreen, price: 19.99},
  {name: "Invincibility coffee", description: "hide after you've lifted a house..", image: coffeeRed, price: 29.99},
  {name: "Regular coffee II", description: "regular coffee to fuel your day", image: coffeeBrown, price: 13.99},
  {name: "Growth coffee II", description: "who doesn't want extra height?", image: coffeeYellow, price: 19.99},
  {name: "Shrink coffee II", description: "feeling tall?", image: coffeeBrown, price: 17.99},
  {name: "Super strength coffee II", description: "lift a house", image: coffeeGreen, price: 39.99},
  {name: "Invincibility coffee II", description: "hide after you've lifted a house..", image: coffeeRed, price: 59.99}
];

function Products(){
  const { basket, addProduct } = useContext(CartContext);
  const [ searchParams ] = useSearchParams();
  
  const query = searchParams.get("q") || "";

  let filteredProducts = products.filter(p => {
    return p.name.toLowerCase().includes(query.toLowerCase())
  });



  const handleFilter = (e) => {
    switch(e.target.value){
      case("PriceDescending"):
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price)
    }
  }
  
  return(
    <> 
      <Navbar />
      <div className="products-container">
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <p><strong> Products ({filteredProducts.length}) </strong></p>
          <select onChange={(e) => handleFilter(e)}>
            <optgroup>
              <option value={"PriceDescending"}>Price (High to Low)</option>
              <option>Price (Low to High)</option>
              <option>Alphabetical (A-Z)</option>
              <option>Alphabetical (Z-A)</option>
            </optgroup>
          </select>
        </div>
        <div className="products">
          { filteredProducts.map(product => {
            return(
              <div className="product" key={product.name}>
                <div className="product-image">
                  <img src={product.image} width="128px"/>
                </div>
                <div className="product-info">
                  <p><strong>{product.name}</strong></p>
                  <p style={{color: "gray"}}>{product.description}</p>
                  <p><strong>£ {product.price}</strong></p>
                  <img
                    src={(basket.find(p => p.name === product.name) ? cartBlackFull : cartBlack)}
                    height="22px" 
                    style={{
                      position: "absolute",
                      placeSelf: "end",
                    }}
                    className="add-to-cart"
                    onClick={()=> addProduct(product, 1)}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Products;