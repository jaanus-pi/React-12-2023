import React from 'react'
import styles from '../../css/HomePage.module.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { toast } from 'react-toastify';

const Product = ({ product }) => {
  const { t } = useTranslation();

  const addToCart = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartLS.findIndex(p => p.product.id === productClicked.id);
    if (index >= 0) {
      cartLS[index].quantity = cartLS[index].quantity + 1;
      // cartLS[index].quantity += 1;
      // cartLS[index].quantity++;
    } else {
      cartLS.push({"quantity": 1, "product": productClicked});
    }
    localStorage.setItem("cart", JSON.stringify(cartLS));
    toast.success("Toode lisatud ostukorvi!");
  }

  return (
    <div className={styles.product}>
      <img src={product.image} alt='' />
      <div className={styles.title}>{product.title}</div>
      <div>{product.price} €</div>
      <button onClick={() => addToCart(product)}>{t("add-to-cart")}</button>
      <Button as={Link} to={'/product/' + product.id}>{t("details")}</Button>
    </div>
  )
}

export default Product