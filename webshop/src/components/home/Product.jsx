import React, { useContext } from 'react'
import styles from '../../css/HomePage.module.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { CartSumContext } from '../../store/CartSumContext'
import { calculateCartTotal } from '../../util/cartUtil'

const Product = ({ product }) => {
  const { t } = useTranslation();
  const { setCartSum } = useContext(CartSumContext);

  const addToCart = (productClicked) => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cartLS.findIndex(p => p.productId === productClicked.id);
    if (index >= 0) {
      cartLS[index].quantity = cartLS[index].quantity + 1;
      // cartLS[index].quantity += 1;
      // cartLS[index].quantity++;
    } else {
      cartLS.push({"quantity": 1, "productId": productClicked.id});
    }
    localStorage.setItem("cart", JSON.stringify(cartLS));
    toast.success("Toode lisatud ostukorvi!");
    setCartSum(calculateCartTotal(cartLS));
  }

  return (
    <div className={styles.product}>
      <img src={product.image} alt='' />
      <div className={styles.title}>{product.title}</div>
      <div>{product.price} €</div>
      <ButtonGroup>
        <Button onClick={() => addToCart(product)}>{t("add to cart")}</Button>
        <Button as={Link} to={'/product/' + product.id} variant="secondary">{t("details")}</Button>
      </ButtonGroup>
    </div>
  )
}

export default Product