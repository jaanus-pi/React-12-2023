import React from 'react'
import joogidFailist from '../joogid.json'
import { Link } from 'react-router-dom'

function Avaleht() {
  return (
    <div>
      {joogidFailist.map((jook, index) =>
        <div key={index}>
          <Link to={'/jook/' + index}>
            <span>{jook}</span>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Avaleht