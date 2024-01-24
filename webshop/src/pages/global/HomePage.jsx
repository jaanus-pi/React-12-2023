import React from 'react'
import { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { ToastContainer } from 'react-toastify';
import styles from '../../css/HomePage.module.css'
import SortButtons from '../../components/home/SortButtons'
import Product from '../../components/home/Product'
import FilterButtons from '../../components/home/FilterButtons';
import useFetchProducts from '../../util/useFetchProducts';

const HomePage = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const {dbProducts, loading} = useFetchProducts();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setProducts(dbProducts.slice())
  }, [dbProducts]);

  useEffect(() => {
    fetch(process.env.REACT_APP_CATEGORIES_DB_URL)
    .then(res => res.json())
    .then(json => {
      setCategories(json);
    })
  }, []);

  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      <FilterButtons 
        categories={categories}
        setProducts={setProducts}
        dbProducts={dbProducts}
      />
      <SortButtons 
        products={products}
        setProducts={setProducts}
      />
      <div>{t("total products")}: {products.length} / {dbProducts.length}</div>
      <div className={styles.products}>
        {products.map(product =>
          <Product 
            key={product.id} 
            product={product}
            dbProducts={dbProducts}
          />
        )}
      </div>
      <ToastContainer />
    </div>
  )
}

export default HomePage