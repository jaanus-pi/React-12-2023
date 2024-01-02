import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <div>Lehte ei leitud</div>
      <Link to='/'>
        <button>Avalehele</button>
      </Link>
    </div>
  )
}

export default NotFound