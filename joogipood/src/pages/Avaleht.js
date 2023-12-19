import React from 'react'
import joogidFailist from '../joogid.json'

function Avaleht() {
  return (
    <div>
      {joogidFailist.map((jook, index) =>
        <div key={index}>
          {jook}
        </div>
      )}
    </div>
  )
}

export default Avaleht