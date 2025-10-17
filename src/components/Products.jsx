import Navbar from "./Navbar";
import "../App.css";
import coffeeGreen from "../assets/products/coffee-green.svg";
import coffeeYellow from "../assets/products/coffee-yellow.svg";
import coffeeRed from "../assets/products/coffee-red.svg";
import coffeeBrown from "../assets/products/coffee-brown.svg";

const products = [{name: "regular coffee", description: "regular coffee to fuel your day", image: {coffeeBrown}, price: "3.99"},
                  {name: "growth coffee", description: "who doesn't want extra height?", image: {coffeeYellow}, price: "9.99"},
                  {name: "shrink coffee", description: "feeling tall?", image: {coffeeBrown}, price: "7.99"},
                  {name: "super strength coffee", description: "lift a house", image: {coffeeGreen}, price: "19.99"},
                  {name: "invincibility coffee", description: "hide after you've lifted a house..", image: {coffeeRed}, price: "29.99"},
                 ];

function Products(){
  return(
    <> 
      <Navbar />
      <div className="products-container">
        <p> Products ({products.length}) </p>
        <div className="products">
          { products.map(product => {
            return(
              <div className="product">
                <img src={product.image} />
                <div>
                  <p>{product.name}</p>
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