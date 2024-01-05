import React from 'react'
import { useTranslation } from 'react-i18next'

const FilterButtons = ({categories, setProducts, dbProducts}) => {
  const { t } = useTranslation();

  const filterByCategory = (categoryClicked) => {
    const filtered = dbProducts.filter(product => product.category === categoryClicked);
    setProducts(filtered);
  }

  const removeFilter = () => {
    setProducts(dbProducts);
  }

  return (
    <div>
      {t("filter")}:
      <button onClick={removeFilter}>Show all</button>
      {categories.map(category => 
      <button key={category.name} onClick={() => filterByCategory(category.name)}>{t(category.name)}</button>)}
    </div>
  )
}

export default FilterButtons