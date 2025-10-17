import { createContext, useState } from "react";
import { useMemo } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
  const [basket, setBasket] = useState([]);

  const addProduct = (product, quantity) => {
    setBasket(prevBasket => {
      
      const existing = prevBasket.find(p => p.name === product.name);

      if(existing){
        return prevBasket.map(p => {
          if(p.name === product.name){
            return {...p, quantity: p.quantity + quantity}
          }
          else{
            return p;
          }
        })
      }
      else{
        return [...prevBasket, {...product, quantity}]
      }
    });
  }

  const setQuantity = (product, quantity) => {
    setBasket(prevBasket => {
      return prevBasket.map(p => {
        if(p.name === product.name){
          return {...p, quantity: Number(quantity)}
        }
        else{
          return p;
        }
      })      
    });
  }

  const removeProduct = (product) => {
    setBasket(prevBasket => {
      return prevBasket.filter(p => p.name != product.name);
    })
  }

  const basketItemCount = useMemo(
    () => basket.reduce((sum, product) => sum + product.quantity, 0),
    [basket]
  );

  const basketTotal = useMemo(
    () => basket
            .reduce((sum, product) => sum + (product.quantity * product.price), 0)
            .toFixed(2),
    [basket]
  );

  return (
    <CartContext.Provider value = {{ basket, addProduct, basketItemCount, basketTotal, setQuantity, removeProduct }}>
      {children}
    </CartContext.Provider>
  )
}