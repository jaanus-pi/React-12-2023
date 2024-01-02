import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function KasutajaPostitus() {
  const { userId } = useParams();
  const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
              const result = data.filter(element => element.userId === Number(userId));
              setNews(result)
            })
    }, [userId]);

  return (
    <div>
      {news.map((element, index) => 
            <div key={index}>
                <div><i>{element.userId}</i></div>
                <div><u>{element.id}</u></div>
                <div><b>{element.title}</b></div>
                <div>{element.body}</div>
                <br />
            </div>
        )}
    </div>
  )
}

export default KasutajaPostitus