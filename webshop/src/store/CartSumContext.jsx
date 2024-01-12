// MyContext.js
import React, { createContext, useState, useEffect } from 'react';
import { calculateCartTotalLS } from '../util/cartUtil';

const CartSumContext = createContext({});

// Create a provider component
const CartSumContextProvider = ({ children }) => {
  // Define your state or any data you want to share
  const [cartSum, setCartSum] = useState("0.00");

  useEffect(() => {
    fetch(process.env.REACT_APP_PRODUCTS_DB_URL)
      .then(res => res.json())
      .then(json => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartSum(calculateCartTotalLS(cart, json));
      })
  }, []);

  return (
    <CartSumContext.Provider value={{ cartSum, setCartSum }}>
      {children}
    </CartSumContext.Provider>
  );
};

export { CartSumContext, CartSumContextProvider };