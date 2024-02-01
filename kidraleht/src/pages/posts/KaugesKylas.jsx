import React from 'react'
import { useParams } from 'react-router-dom'
import postsFromFile from '../../data/posts.json'
import Sidebar from "../../components/Sidebar"
import "../../css/Single.css"
import "../../css/SinglePost.css";

const KaugesKylas = () => {
  const { id } = useParams();
  const post = postsFromFile[id];

  return (
    <div>
      <div className="single">
      <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={post.image} alt="" className="singlePostImage" />
        <h1 className="singlePostTitle">{post.title}</h1>
        <div className="singlePostInfo">
        </div>
        <div className="postContent">
          {post.description}
          <hr />
          <div>
            <p>Selle loo mängimiseks on kaks võimalust. Esimesena on akordid kasutades <b>capot 2. vahes</b>. Siin on uus akord F, mille kõige levinumat vormi nimetatakse barre akordiks (bar chord), selle võime hetkel vahele jätta.</p>
            <img src={require("../../assets/posts/kauges-kylas/tabs-capo-2.png")} alt='Tabs capo 2' />
            <p>Teine viis seda lugu mängida on <b>ilma capota</b>, kasutades neid akorde. Siin on aga meie jaoks uus Bm, mille kõige levinum vorm on samuti barre akord. Seega võime ka siin hetkel selle lihtsalt vahele jätta.</p>
            <img src={require("../../assets/posts/kauges-kylas/tabs-no-capo.png")} alt='Tabs no capo' />
          </div>
        </div>
      </div>
    </div>
      <Sidebar />
    </div>
    </div>
  )
}

export default KaugesKylas