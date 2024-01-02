import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function YksPostitus() {
  const { id } = useParams();
  const [ post, setPost ] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(response => response.json())
            .then(data => setPost(data))
  }, [id]);

  return (
    <div>
      <div><i>{post.userId}</i></div>
      <div><u>{post.id}</u></div>
      <div><b>{post.title}</b></div>
      <div>{post.body}</div>
    </div>
  )
}

export default YksPostitus