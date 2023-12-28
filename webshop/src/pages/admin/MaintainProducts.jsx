import React from 'react'
import productsFromFile from '../../data/products.json'
import { useState } from 'react'

const MaintainProducts = () => {
  const [products, setProducts] = useState(productsFromFile);

  const deleteProduct = () => {

  }

  return (
    <div>
      {products.map(product =>
          <div key={product.id} className='product'>
            <img src={product.image} alt='' />
            <div>{product.id}</div>
            <div>{product.title}</div>
            <div>{product.price} €</div>
            <div>{product.description}</div>
            <div>{product.category}</div>
            <div>{product.rating.rate}</div>
            <div>{product.rating.count}</div>
            <button>Kustuta</button>
            <button>Muuda</button>
          </div>
        )}
    </div>
  )
}

export default MaintainProducts