import { useRef } from 'react'
// import productsFromFile from '../../data/products.json'
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import useFetchProducts from '../../util/useFetchProducts';

const AddProduct = () => {
  const { t } = useTranslation();
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  // const [dbProducts, setDbProducts] = useState([]);
  const {dbProducts} = useFetchProducts();
  const [categories, setCategories] = useState([]);
  const [idUnique, setIdUnique] = useState(true);

  useEffect(() => {
      fetch(process.env.REACT_APP_CATEGORIES_DB_URL)
      .then(res => res.json())
      .then(json => {
        setCategories(json);
      })
  }, []);

  const add = () => {
    if (titleRef.current.value[0].toLowerCase() === titleRef.current.value[0]) {
      toast.error("Title does not start with a capital letter")
      return;
    }

    if (priceRef.current.value === '') {
      toast.error("No price")
      return;
    }

    dbProducts.push({
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
    idRef.current.value = '';
    titleRef.current.value = '';
    priceRef.current.value = '';
    descriptionRef.current.value = '';
    categoryRef.current.value = '';
    imageRef.current.value = '';
    fetch(process.env.REACT_APP_PRODUCTS_DB_URL, {"method": "PUT", "body": JSON.stringify(dbProducts)});
    toast.success("Product successfully added!");
  }

  const checkIdUniqueness = () => {
    const index = dbProducts.findIndex(element => element.id === Number(idRef.current.value));
    if (index === -1) {
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }
    console.log("checking");
  }

  return (
    <div>
      {idUnique === false && <div>{t("entered id is not unique")}!</div>}
      <label>ID</label>
      <input type='number' onChange={checkIdUniqueness} ref={idRef} /> <br />
      <label>{t('title')}</label>
      <input type='text' ref={titleRef} /> <br />
      <label>{t('price')}</label>
      <input type='number' ref={priceRef} /> <br />
      <label>{t('description')}</label>
      <input type='text' ref={descriptionRef} /> <br />
      <label>{t('category')}</label>
      {/* <input type='text' ref={categoryRef} /> <br /> */}
      <select ref={categoryRef}>
        {categories.map(category => <option key={category.name}>{category.name}</option>)}
      </select> <br />
      <label>{t('image')}</label>
      <input type='text' ref={imageRef} /> <br />
      <Button disabled={idUnique === false} onClick={add}>{t('add')}</Button>
    </div>
  )
}

export default AddProduct