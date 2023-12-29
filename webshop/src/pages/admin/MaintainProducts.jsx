import React from 'react'
// import productsFromFile from '../../data/products.json'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useRef } from 'react'
import '../../css/MaintainProducts.css';
import { useEffect } from 'react'

const MaintainProducts = () => {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const { t } = useTranslation();
  const searchedRef = useRef();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(json => {
        setProducts(json); // väljanägemisega seotult muudan tooteid
        setDbProducts(json); // rohkem ei tee, va kui midagi andmebaasiga seotult
      })
  }, []);

  const deleteProduct = (product) => {
    const index = dbProducts.findIndex(element => element.id === Number(product.id));
    dbProducts.splice(index, 1);
    setProducts(dbProducts.slice());
  }

  const searchFromProducts = () => {
    const result = dbProducts.filter(product => 
      product.title.toLowerCase().includes(searchedRef.current.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchedRef.current.value.toLowerCase())
      );
    setProducts(result);
  }

  return (
    <div>
      <input ref={searchedRef} onChange={searchFromProducts} type='text' />
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product =>
            <tr key={product.id}>
              <td><img className='picture' src={product.image} alt='' /></td>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price} €</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.rating.rate}</td>
              <td>{product.rating.count}</td>
              <td>
                <button onClick={() => deleteProduct(product)}>{t('delete')}</button>
                <Button as={Link} to={'/admin/edit/' + product.id}>{t('change')}</Button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default MaintainProducts