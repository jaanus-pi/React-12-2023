import React, { useRef } from 'react'
import productsFromFile from '../../data/products.json'
import { useTranslation } from 'react-i18next';

const AddProduct = () => {
  const { t } = useTranslation();
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();

  const updateProduct = () => {
    productsFromFile.push({
      "id": Number(idRef.current.value),
      "title": titleRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "image": imageRef.current.value,
      "rating": {
        "rate": 0,
        "count": 0
      }
    });
  }

  return (
    <div>
      <label>Id</label>
      <input type='number' ref={idRef} /> <br />
      <label>{t('title')}</label>
      <input type='text' ref={titleRef} /> <br />
      <label>{t('price')}</label>
      <input type='number' ref={priceRef} /> <br />
      <label>{t('description')}</label>
      <input type='text' ref={descriptionRef} /> <br />
      <label>{t('category')}</label>
      <input type='text' ref={categoryRef} /> <br />
      <label>{t('image')}</label>
      <input type='text' ref={imageRef} /> <br />
      <button onClick={updateProduct}>{t('add')}</button>
    </div>
  )
}

export default AddProduct