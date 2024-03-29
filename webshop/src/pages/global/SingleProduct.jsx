import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useFetchProducts from '../../util/useFetchProducts';
import { Spinner } from 'react-bootstrap';
// import productsFromFile from '../../data/products.json'

const SingleProduct = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const {dbProducts, loading} = useFetchProducts();
  const product = dbProducts.find(product => product.id === Number(id));

  if ( loading === true ) {
    return <Spinner />
  }

  if ( product === undefined ) {
    return <div>{t("product not found")}</div>
  }

  return (
    <div>
      <img src={product.image} alt='' />
      <div>{product.id}</div>
      <div>{product.title}</div>
      <div>{product.price} €</div>
      <div>{product.description}</div>
      <div>{product.category}</div>
      <div>{product.rating.rate}</div>
      <div>{product.rating.count}</div>
    </div>
  )
}

export default SingleProduct