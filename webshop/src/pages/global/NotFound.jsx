import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div>{t("page not found")}</div>
      <Link to='/'>
        <button>{t("home page")}</button>
      </Link>
    </div>
  )
}

export default NotFound