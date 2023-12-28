import React from 'react'
import productsFromFile from '../../data/products.json'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../../css/HomePage.css'

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

  const filterMensClothing = () => {
    const filtered = products.filter(product => product.category === "men's clothing");
    setProducts(filtered);
  }

  const filterWomensClothing = () => {
    const filtered = products.filter(product => product.category === "women's clothing");
    setProducts(filtered);
  }

  const filterElectronics = () => {
    const filtered = products.filter(product => product.category === "electronics");
    setProducts(filtered);
  }

  const filterJewelery = () => {
    const filtered = products.filter(product => product.category === "jewelery");
    setProducts(filtered);
  }

  return (
    <div>
      <div>
        Filtreeri:
        <button onClick={filterMensClothing}>men's clothing</button>
        <button onClick={filterWomensClothing}>women's clothing</button>
        <button onClick={filterJewelery}>jewelery</button>
        <button onClick={filterElectronics}>electronics</button>
      </div>
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
            <Button as={Link} to={'/product/' + product.id}>Details</Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage