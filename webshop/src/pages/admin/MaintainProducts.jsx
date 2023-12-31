import React from 'react'
// import productsFromFile from '../../data/products.json'
import { Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useRef } from 'react'
import '../../css/MaintainProducts.css';
import { useEffect } from 'react'
import { toast } from 'react-toastify';

const MaintainProducts = () => {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const { t } = useTranslation();
  const searchedRef = useRef();

  useEffect(() => {
    fetch(process.env.REACT_APP_PRODUCTS_DB_URL)
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
    toast.success("Product removed");
    fetch(process.env.REACT_APP_PRODUCTS_DB_URL, {"method": "PUT", "body": JSON.stringify(dbProducts)});
  }

  const searchFromProducts = () => {
    const result = dbProducts.filter(product => 
      product.title.toLowerCase().includes(searchedRef.current.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchedRef.current.value.toLowerCase())
      );
    setProducts(result);
  }

  if (dbProducts.length === 0) {
    return <Spinner />
  }

  return (
    <div>
      <span>{t("search")}:</span>
      <input ref={searchedRef} onChange={searchFromProducts} type='text' />
      <table>
        <thead>
          <tr>
            <th>{t("image")}</th>
            <th>ID</th>
            <th>{t("title")}</th>
            <th>{t("price")}</th>
            <th>{t("description")}</th>
            <th>{t("category")}</th>
            <th>{t("rating")}</th>
            <th>{t("rating count")}</th>
            <th>{t("actions")}</th>
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