import React from 'react'
import productsFromFile from '../../data/products.json'
import { useState } from 'react'
import '../../css/HomePage.css'

const HomePage = () => {
  const [products, setProducts] = useState(productsFromFile);

  return (
    <div>
      <div className='products'>
        {products.map(product =>
          <div key={product.id} className='product'>
            <img src={product.image} alt='' />
            <div className='title'>{product.title}</div>
            <div>{product.price} €</div>
            <button>Add to cart</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage