import React from 'react'
import cartFromFile from '../../data/cart.json'
import '../../css/Cart.css';
import { useState } from 'react';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Cart = () => {
  const [parcelMachines, setParcelMachines] = useState([]);
  const [cart, setCart] = useState(cartFromFile);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(response => response.json())
      .then(json => setParcelMachines(json))
  }, []);

  const removeFromCart = (index) => {
    cartFromFile.splice(index, 1);
    setCart(cartFromFile.slice());
  }

  const emptyCart = () => {
    cartFromFile.splice(0);
    setCart(cartFromFile.slice());
  }

  const calculateCartTotal = () => {
    let sum = 0;
    cart.forEach(product => sum = sum + product.price);
    return sum;
  }

  return (
    <div>
      {cart.length !== 0 ? 
        <div>
          Ostukorvis on {cart.length} toode(t)
          <button onClick={emptyCart}>Empty Cart</button>
        </div> :
        <div>
          <div>Ostukorv on tuhi</div>
          <Link to='/'>
            <button>Avalehele</button>
          </Link>
        </div>
      }
      {cart.map((product, index) => 
        <div key={index}>
          <img className='picture' src={product.image} alt='' />
          <span>{product.title} - </span>
          <span>{product.price} EUR</span>
          <button onClick={() => removeFromCart(index)}>x</button>
        </div>
      )}
      <select>
        {parcelMachines
        .filter(pm => pm.A0_NAME === "EE")
        .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
      </select>
      <div>Kokku: {calculateCartTotal()} - EUR</div>
    </div>
  )
}

export default Cart