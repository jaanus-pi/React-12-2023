import { useState, useEffect } from 'react';
import { ButtonGroup, Spinner, Button } from 'react-bootstrap';
import Map from '../../components/Map';
import { useTranslation } from 'react-i18next';
import { Button as MuiButton} from '@mui/material';
		
const Shops = () => {
	const { t } = useTranslation();
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoaded] = useState(true)

  useEffect(() => {
    fetch(process.env.REACT_APP_SHOPS_DB_URL)
      .then(res => res.json())
      .then(json => {
        setShops(json || []);
        setIsLoaded(false);
      })
  }, []);

  if (isLoading) {
    return <Spinner />
  }
		
  return (
    <div>
      <MuiButton onClick={() => setCoordinates({lngLat: [58.7286, 25.7873], zoom: 7})}>{t("all shops")}</MuiButton>{' '}
      <MuiButton onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>{t("all shops in tallinn")}</MuiButton>{' '}
      <div>
        <ButtonGroup>
          {shops.map(shop =>
            <Button key={shop.name} onClick={() => setCoordinates({lngLat: [shop.longitude, shop.latitude], zoom: 13})} size="sm" variant='secondary'>{shop.name}</Button>
          )}
        </ButtonGroup>
      </div>

      <Map mapCoordinaates={coordinaates}  />
    </div>
  )
}
		
export default Shops;