import React from 'react'
import cartFromFile from '../../data/cart.json'
import '../../css/Cart.css';
import { useState } from 'react';
import { useEffect } from 'react'

const Cart = () => {
  const [parcelMachines, setParcelMachines] = useState([]);
  const [cart, setCart] = useState(cartFromFile);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(response => response.json())
      .then(json => setParcelMachines(json))
  }, []);

  return (
    <div>
      {cart.map((product, index) => 
        <div key={index}>
          <img className='picture' src={product.image} alt='' />
          <span>{product.title} - </span>
          <span>{product.price} EUR</span>
          </div>
          )}
      <select>
        {parcelMachines
        .filter(pm => pm.A0_NAME === "EE")
        .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
      </select>
    </div>
  )
}

export default Cart