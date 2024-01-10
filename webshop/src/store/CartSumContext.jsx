// MyContext.js
import React, { createContext, useState } from 'react';
import { calculateCartTotal } from '../util/cartUtil';

const CartSumContext = createContext({});

// Create a provider component
const CartSumContextProvider = ({ children }) => {
  // Define your state or any data you want to share
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartSum, setCartSum] = useState(calculateCartTotal(cart));

  return (
    <CartSumContext.Provider value={{ cartSum, setCartSum }}>
      {children}
    </CartSumContext.Provider>
  );
};

export { CartSumContext, CartSumContextProvider };