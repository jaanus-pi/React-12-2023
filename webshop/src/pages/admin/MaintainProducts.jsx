import React from 'react'
import productsFromFile from '../../data/products.json'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';

const MaintainProducts = () => {
  const [products, setProducts] = useState(productsFromFile);
  const { t } = useTranslation();

  const deleteProduct = (product) => {
    const index = productsFromFile.findIndex(element => element.id === Number(product.id));
    productsFromFile.splice(index, 1);
    setProducts(productsFromFile.slice());
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
            <button onClick={() => deleteProduct(product)}>{t('delete')}</button>
            <Button as={Link} to={'/admin/edit/' + product.id}>{t('change')}</Button>
          </div>
        )}
    </div>
  )
}

export default MaintainProducts