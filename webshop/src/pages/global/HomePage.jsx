import React from 'react'
// import productsFromFile from '../../data/products.json'
// import cartFromFile from '../../data/cart.json'
import { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { ToastContainer } from 'react-toastify';
import styles from '../../css/HomePage.module.css'
import SortButtons from '../../components/home/SortButtons'
import Product from '../../components/home/Product'

const HomePage = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_PRODUCTS_DB_URL)
      .then(res => res.json())
      .then(json => {
        setProducts(json); // väljanägemisega seotult muudan tooteid
        setDbProducts(json); // rohkem ei tee, va kui midagi andmebaasiga seotult
      })
      fetch(process.env.REACT_APP_CATEGORIES_DB_URL)
      .then(res => res.json())
      .then(json => {
        setCategories(json);
      })
  }, []);

  // const filterMensClothing = () => {
  //   const filtered = dbProducts.filter(product => product.category === "men's clothing");
  //   setProducts(filtered);
  // }

  // const filterWomensClothing = () => {
  //   const filtered = dbProducts.filter(product => product.category === "women's clothing");
  //   setProducts(filtered);
  // }

  // const filterElectronics = () => {
  //   const filtered = dbProducts.filter(product => product.category === "electronics");
  //   setProducts(filtered);
  // }

  // const filterJewelery = () => {
  //   const filtered = dbProducts.filter(product => product.category === "jewelery");
  //   setProducts(filtered);
  // }

  const filterByCategory = (categoryClicked) => {
    const filtered = dbProducts.filter(product => product.category === categoryClicked);
    setProducts(filtered);
  }

  if (dbProducts.length === 0) {
    return <Spinner />
  }

  return (
    <div>
      <div>
        {t("filter")}:
        {/* <button onClick={filterMensClothing}>{t("mens-clothing")}</button>
        <button onClick={filterWomensClothing}>{t("womens-clothing")}</button>
        <button onClick={filterJewelery}>{t("jewelery")}</button>
        <button onClick={filterElectronics}>{t("electronics")}</button> */}
        {categories.map(category => 
          <button key={category.name} onClick={() => filterByCategory(category.name)}>{t(category.name)}</button>)}
      </div>
      <SortButtons 
        products={products}
        setProducts={setProducts}
      />
      <div>{t("total-products")}: {products.length} / {dbProducts.length}</div>
      <div className={styles.products}>
        {products.map(product =>
          <Product key={product.id} product={product}/>
        )}
      </div>
      <ToastContainer />
    </div>
  )
}

export default HomePage