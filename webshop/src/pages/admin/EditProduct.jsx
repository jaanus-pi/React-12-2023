import React, { useRef, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import productsFromFile from '../../data/products.json'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const EditProduct = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [dbProducts, setDbProducts] = useState([]);
  const found = dbProducts.find(product => product.id === Number(id));
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_PRODUCTS_DB_URL)
      .then(res => res.json())
      .then(json => {
        setDbProducts(json);
      })
      fetch(process.env.REACT_APP_CATEGORIES_DB_URL)
      .then(res => res.json())
      .then(json => {
        setCategories(json);
      })
  }, []);

  const updateProduct = () => {
    if (titleRef.current.value[0].toLowerCase() === titleRef.current.value[0]) {
      return;
    }

    if (priceRef.current.value === '') {
      return;
    }
    
    const index = dbProducts.findIndex(product => product.id === Number(id));
    dbProducts[index] = {
      "id": Number(idRef.current.value),
      "title": titleRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "image": imageRef.current.value,
      "rating": {
        "rate": Number(found.rating.rate),
        "count": Number(found.rating.count)
      }
    };
    fetch(process.env.REACT_APP_PRODUCTS_DB_URL, {"method": "PUT", "body": JSON.stringify(dbProducts)})
      .then(() => navigate('/admin/maintain'));
  }

  const [idUnique, setIdUnique] = useState(true);

  const checkIdUniqueness = () => {
    if (idRef.current.value === id) {
      setIdUnique(true);
      return;
    }
    const index = dbProducts.findIndex(element => element.id === Number(idRef.current.value));
    if (index === -1) {
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }
  }

  if (found === undefined) {
    return <div>{t("product not found")}</div>
  }

  return (
    <div>
      {idUnique === false && <div>{t("entered id is not unique")}!</div>}
      <label>ID</label>
      <input type='number' onChange={checkIdUniqueness} ref={idRef} defaultValue={found.id} /> <br />
      <label>{t("title")}</label>
      <input type='text' ref={titleRef} defaultValue={found.title} /> <br />
      <label>{t("price")}</label>
      <input type='number' ref={priceRef} defaultValue={found.price} /> <br />
      <label>{t("description")}</label>
      <input type='text' ref={descriptionRef} defaultValue={found.description} /> <br />
      <label>{t("category")}</label>
      {/* <input type='text' ref={categoryRef} defaultValue={found.category} /> <br /> */}
      <select ref={categoryRef} defaultValue={found.category}>
        {categories.map(category => <option key={category.name}>{category.name}</option>)}
      </select> <br />
      <label>{t("image")}</label>
      <input type='text' ref={imageRef} defaultValue={found.image} /> <br />
      <button disabled={idUnique === false} onClick={updateProduct}>Muuda</button>
    </div>
  )
}

export default EditProduct