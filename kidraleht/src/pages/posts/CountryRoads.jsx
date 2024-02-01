import React from 'react'
import { useParams } from 'react-router-dom'
import postsFromFile from '../../data/posts.json'
import Sidebar from "../../components/Sidebar"
import "../../css/Single.css"
import "../../css/SinglePost.css";

const CountryRoads = () => {
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
            <p>
              Proovi mängida igat akordi 4 tõmmet. Kui tunned ennast mugavalt, proovi kaasa mängida YouTubes võttes kiirust alla, nt 0.5x kiirusel. Kaasa mängimiseks seda lugu oleks vaja kasutada <b>capot</b>, mille paned <b>teise vahesse</b>. Akordide vormid jäävad kõik samaks, kuid nüüd hakkad vahesi lugema alates capost. Mõned näited on all piltidel.
              Rütmikaks saad kasutada igalpool näiteks 4 tõmmet, välja arvatud salmi ridade lõpus, kus märgitud teisiti 2t (kaks tõmmet).
            </p>
            <img src={require("../../assets/posts/country-roads/tabs.png")} alt='tabs' />
          </div>
          <div>
            <p>Akordivormid:</p>
            <img src={require("../../assets/posts/country-roads/C.png")} alt='C' />
            <img src={require("../../assets/posts/country-roads/Em.png")} alt='Em' />
            <img src={require("../../assets/posts/country-roads/D.png")} alt='D' />
            <img src={require("../../assets/posts/country-roads/G.png")} alt='G' />
            <p>Capo 2 vahes: esimesel pildil on G vorm ja teisel D vorm:</p>
            <img src={require("../../assets/posts/country-roads/capoG.png")} alt='Capo G' />
            <img src={require("../../assets/posts/country-roads/capoD.png")} alt='Capo D' />
          </div>
        </div>
      </div>
    </div>
      <Sidebar />
    </div>
    </div>
  )
}

export default CountryRoads