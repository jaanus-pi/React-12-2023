import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Avaleht() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setNews(data))
    }, []);

    return ( <div>
        <div>See on avaleht, mis on nähtav localhost:3000 aadressil.</div>
        <img className="pilt"src="https://cdn.pixabay.com/photo/2023/06/21/04/42/automobile-8078415_960_720.jpg" alt="Car on road" />
        {news.map((element, index) => 
            <div key={index}>
                <div><i>{element.userId}</i></div>
                <div><u>{element.id}</u></div>
                <div><b>{element.title}</b></div>
                <div>{element.body}</div>
                <Link to={'/kasutaja-postitus/' + element.userId}>
                    <button className='nav-nupp'>Kõik kasutaja postitused</button>
                </Link>
                <Link to={'/yks-postitus/' + element.id}>
                    <button className='nav-nupp'>Kuva postitus</button>
                </Link>
                <br /><br />
            </div>
        )}
    </div> );
}

export default Avaleht;