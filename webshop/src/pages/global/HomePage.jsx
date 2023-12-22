import React from 'react'
import productsFromFile from '../../data/products.json'
import { useState } from 'react'

const HomePage = () => {
  const [products, setProducts] = useState(productsFromFile);

  return (
    <div>
      {products.map(product =>
        <div>
          <img src={product.image} alt='' />
          <div>{product.title}</div>
          <div>{product.price} €</div>
          <button>Add to cart</button>
        </div>
      )}
    </div>
  )
}

export default HomePage