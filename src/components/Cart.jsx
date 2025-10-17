import Navbar from "./Navbar";
import "../App.css";
import { Link } from "react-router";
import Arrow from "../assets/arrow-left.svg";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart(){
  const {basket, basketTotal, setQuantity, removeProduct} = useContext(CartContext);
  
  return(
    <>
      <Navbar />
      <div className="cart-container">
        <Link to="/Products">
          <img src={Arrow} height="24px"/>
        </Link>
        <p><strong> Your Shopping Cart </strong></p>
        { basket.map(product => {
            return(
              <div className="basket-product-card">
                <img src={product.image} width="128px"/>
                <div>
                  <p><strong>{product.name}</strong></p>
                  <p>Price: £ {(product.price * product.quantity).toFixed(2)}</p>
                  <p>Qty: 
                    <input 
                      key={product.name}
                      className="quantity-input"
                      type="number" 
                      name="quantity" 
                      min={1}
                      max={20}
                      defaultValue={product.quantity}
                      onKeyDown={(event) => { event.preventDefault(); }}
                      onChange={(e) => {setQuantity(product, (e.target.value))}}
                    />
                  </p>
                  <button 
                    className="remove-button"
                    onClick={() => {removeProduct(product)}}
                  > 
                    Remove from cart 
                  </button>
                </div>
              </div>
            )
        })}
        {(basketTotal != 0.00) ? (
          <div className="cart-info">
            <p>Total Price: <strong>£ {basketTotal}</strong></p>
            <button className="checkout-button"> Checkout </button>
          </div> 
        ) : ""}
      </div>
    </>
  );
}

export default Cart;