import React, { useCallback, useContext, useMemo } from 'react'
// import cartFromFile from '../../data/cart.json'
import styles from '../../css/Cart.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParcelMachines from '../../components/cart/ParcelMachines';
import Payment from '../../components/cart/Payment';
import { useTranslation } from 'react-i18next'
import Button from 'react-bootstrap/Button';
import { CartSumContext } from '../../store/CartSumContext';
import { calculateCartTotal } from '../../util/cartUtil';
import { Spinner } from 'react-bootstrap';
import { CartProduct } from '../../models/CartProduct';
import { Product } from '../../models/Product';
import { LocalStorageProduct } from '../../models/LocalStorageProduct';

const Cart = () => {
  const { t } = useTranslation();
  const [cart, setCart] = useState<CartProduct[]>(
    // JSON.parse(localStorage.getItem("cart")) || []
    []
  );
  const { setCartSum } = useContext(CartSumContext);
  const [loading, setLoading] = useState(true);
  const cartLS: LocalStorageProduct[] = useMemo(() => JSON.parse(localStorage.getItem("cart") || "[]"), []);

  const getCartWithProducts = useCallback((json: Product[]) => {
    const cartWithProducts = cartLS.map((cartProduct: LocalStorageProduct) => ({
      "quantity": cartProduct.quantity,
      "product": json.find((dbProduct: Product) => dbProduct.id === cartProduct.productId)
    }));
    const cartWithoutUndefined = cartWithProducts.filter(p => p.product !== undefined) as CartProduct[];
    setCart(cartWithoutUndefined)
  }, [cartLS]);

  useEffect(() => {
    const url = process.env.REACT_APP_PRODUCTS_DB_URL;
    if (url === undefined) return;
    fetch(url)
      .then(res => res.json())
      .then(json => { 
        getCartWithProducts(json);
        setLoading(false);
      })
  }, [getCartWithProducts]);

  const removeFromCart = (index: number) => {
    cart.splice(index, 1);
    cartLS.splice(index, 1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cartLS));
    setCartSum(calculateCartTotal(cart));
  }

  const emptyCart = () => {
    cart.splice(0);
    cartLS.splice(0);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cartLS));
    setCartSum("0.00");
  }

  const decreaseQuantity = (index: number) => {
    cart[index].quantity--;
    cartLS[index].quantity--;
    if (cart[index].quantity === 0) {
      cart.splice(index, 1);
    }
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cartLS));
    setCartSum(calculateCartTotal(cart));
  }

  const increaseQuantity = (index: number) => {
    cart[index].quantity++;
    cartLS[index].quantity++;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cartLS));
    setCartSum(calculateCartTotal(cart));
  }

  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      {cart.length !== 0 ? 
        <div className={styles.product}>
          <span className={styles.totalProducts}>{t("total products")}: {cart.length} <br /></span>
          <Button onClick={emptyCart} variant="secondary">{t("empty cart")}</Button>
        </div> :
        <div>
          <div>{t("cart empty")}</div>
          <Link to='/'>
            <button>{t("home page")}</button>
          </Link>
        </div>
      }
      {cart.map((cartProduct, index) => 
        <div className={styles.product} key={index}>
          <img className={styles.picture} src={cartProduct.product.image} alt='' />
          <span className={styles.title}>{cartProduct.product.title}</span>
          <span className={styles.price}>{cartProduct.product.price.toFixed(2)} €</span>
          <span className={styles.quantity}>
            <img className={styles.button} src={require('../../assets/cart/minus.png')} onClick={() => decreaseQuantity(index)} alt=''/>
            <span>{cartProduct.quantity} {t("pc")}</span>
            <img className={styles.button} src={require('../../assets/cart/plus.png')} onClick={() => increaseQuantity(index)} alt=''/>
          </span>
          <span className={styles.total}>{(cartProduct.product.price * cartProduct.quantity).toFixed(2)} €</span>
          <img className={styles.button} src={require('../../assets/cart/remove.png')} onClick={() => removeFromCart(index)} alt=''/>
        </div>
      )}
      {cart.length !== 0 &&
      <div className={styles.payment}>
        <div>{t("pick a parcel machine")}:</div>
        <div><ParcelMachines /></div>
        <div>{t("total")}: {calculateCartTotal(cart)} €</div>
        <div><Payment sum={calculateCartTotal(cart)} /></div>
      </div>
      }
    </div>
  )
}

export default Cart