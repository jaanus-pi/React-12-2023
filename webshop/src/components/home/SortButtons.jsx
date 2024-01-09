import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonGroup } from 'react-bootstrap'
                  // = (props)
const SortButtons = ({products, setProducts}) => {
  const { t } = useTranslation();

  const sortAToZ = () => {
    products.sort((a, b) => a.title.localeCompare(b.title));
    setProducts(products.slice());
  }

  const sortZToA = () => {
    products.sort((a, b) => b.title.localeCompare(a.title));
    setProducts(products.slice());
  }

  const sortPriceAscending = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  }

  const sortPriceDescending = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  }

  const sortRatingAscending = () => {
    products.sort((a, b) => a.rating.rate - b.rating.rate);
    setProducts(products.slice());
  }

  const sortRatingDescending = () => {
    products.sort((a, b) => b.rating.rate - a.rating.rate);
    setProducts(products.slice());
  }

  return (
    <div>
      <ButtonGroup size="sm">
        <Button variant="secondary" onClick={sortAToZ}>A-Z</Button>
        <Button variant="secondary" onClick={sortZToA}>Z-A</Button>
        <Button variant="secondary" onClick={sortPriceAscending}>{t('price ascending')}</Button>
        <Button variant="secondary" onClick={sortPriceDescending}>{t('price descending')}</Button>
        <Button variant="secondary" onClick={sortRatingAscending}>{t('rating ascending')}</Button>
        <Button variant="secondary" onClick={sortRatingDescending}>{t('rating descending')}</Button>
      </ButtonGroup>
    </div>
  )
}

export default SortButtons