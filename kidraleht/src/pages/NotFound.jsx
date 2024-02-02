import React from 'react'
import { Link } from 'react-router-dom'
import "../css/NotFound.css"

const NotFound = () => {
  return (
    <div className='pageNotFound'>
      <div className='notFoundText'>LEHTE EI LEITUD</div>
      <Link to='/'>
        <button className='notFoundButton'>AVALEHT</button>
      </Link>
    </div>
  )
}

export default NotFound