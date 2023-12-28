import React from 'react'
import productsFromFile from '../../data/products.json'
import { useState } from 'react'
import '../../css/HomePage.css'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const [products, setProducts] = useState(productsFromFile);
  const { t } = useTranslation();

  const sortAToZ = () => {
    products.sort((a, b) => a.title.localeCompare(b.title));
    setProducts(products.slice());
  }

  const sortZToA = () => {
    products.sort((a, b) => b.title.localeCompare(a.title));
    setProducts(products.slice());
  }

  const sortPriceAscending = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  }

  const sortPriceDescending = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  }

  const sortRatingAscending = () => {
    products.sort((a, b) => a.rating.rate - b.rating.rate);
    setProducts(products.slice());
  }

  const sortRatingDescending = () => {
    products.sort((a, b) => b.rating.rate - a.rating.rate);
    setProducts(products.slice());
  }

  return (
    <div>
      <button>men's clothing</button>
      <button>jewelery</button>
      <button>electronics</button>
      <button>women's clothing</button>
      <div>
        Sorteeri:
        <button onClick={sortAToZ}>A-Z</button>
        <button onClick={sortZToA}>Z-A</button>
        <button onClick={sortPriceAscending}>{t('price-ascending')}</button>
        <button onClick={sortPriceDescending}>{t('price-descending')}</button>
        <button onClick={sortRatingAscending}>{t('rating-ascending')}</button>
        <button onClick={sortRatingDescending}>{t('rating-descending')}</button>
      </div>
      <div>Tooteid kokku: {products.length} / {productsFromFile.length}</div>
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