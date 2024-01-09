import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import Map from '../../components/Map';
import { useTranslation } from 'react-i18next';
		
const Shops = () => {
	const { t } = useTranslation();
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_SHOPS_DB_URL)
      .then(res => res.json())
      .then(json => {
        setShops(json);
      })
  }, []);

  if (shops.length === 0) {
    return <Spinner />
  }
		
  return (
    <div>
      <button onClick={() => setCoordinates({lngLat: [58.7286, 25.7873], zoom: 7})}>{t("all shops")}</button>
      <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>{t("all shops in tallinn")}</button>

      {/* kuidas homepage sees sai tehtud filterbuttons */}
      {/* <button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</button>
      <button onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine</button>
      <button onClick={() => setCoordinates({lngLat: [58.3777, 26.7301], zoom: 13})}>Tasku</button> */}
      <div>
        {shops.map(shop => 
          <button key={shop.name} onClick={() => setCoordinates({lngLat: [shop.longitude, shop.latitude], zoom: 13})}>{shop.name}</button>
        )}
      </div>

      <Map mapCoordinaates={coordinaates}  />
    </div>
  )
}
		
export default Shops;