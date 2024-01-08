import React from 'react'
import { useParams } from 'react-router-dom'

const YksUudis = () => {
  const { index } = useParams();
  const uudised = JSON.parse(localStorage.getItem("uudised")) || [];
  const leitudUudis = uudised[index];

  return (
    <div>
      {leitudUudis}
    </div>
  )
}

export default YksUudis