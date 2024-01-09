import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from 'react-bootstrap/Button';

const Payment = (props) => {
  const { t } = useTranslation();

  const pay = () => {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const paymentData = {
      "api_username": "e36eb40f5ec87fa2", // headerites juba on kasutajanimi, aga turvakaalutlustel pean siin kordama
      "account_name": "EUR3D1", // konto kuhu raha läheb. Apollo: kino, raamatud, blender, e-pood, ...
      "amount": props.sum, // suma
      "order_reference": Math.random()*999999, // tellimuse number
      "nonce": "a9b7ff" + Math.random()*999999 + new Date(), // turvakaalutlustel iga kord erinev numbrite-tähtede kombinatsioon
      "timestamp": new Date(), // turvakaalutlustel praegune kellaaeg +/- 5min
      "customer_url": "https://jaanuspi-webshop.web.app" // aadress, kuhu tagasi suunata
    }
    const paymentHeaders = {
      "Authorization": "Basic ZTM2ZWI0MGY1ZWM4N2ZhMjo3YjkxYTNiOWUxYjc0NTI0YzJlOWZjMjgyZjhhYzhjZA==",
      "Content-Type": "application/json"
    }
    
    fetch(url, {"method": "POST", "body": JSON.stringify(paymentData), "headers": paymentHeaders})
      .then(res => res.json())
      .then(json => window.location.href = json.payment_link)
  }

  return (
    <Button onClick={pay}>{t("pay")}</Button>
  )
}

export default Payment