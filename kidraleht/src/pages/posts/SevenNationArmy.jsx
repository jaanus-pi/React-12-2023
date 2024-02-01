import React from 'react'
import { useParams } from 'react-router-dom'
import postsFromFile from '../../data/posts.json'
import Sidebar from "../../components/Sidebar"
import "../../css/Single.css"
import "../../css/SinglePost.css";

const SevenNationArmy = () => {
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
            <p>Selle loo õppimiseks kasutame tab’i. Tabil on kujutatud kõik 6 kitarri keelt, ning numbritega märgitud nende peale, mis vahes olevat nooti peaks mängima. Rütmi siin kujutatud ei ole, seega peaks lugu ise enam-vähem teadma või järgi kuulama.</p>
            <img src={require("../../assets/posts/seven-nation-army/riff-tab.png")} alt='riff tab' />
            <p>Siin on kujutatud Seven Nation Army põhilist <i>kitarririffi</i>. Usun, et kui korra seda lugu youtubes kuulata, tunneme kohe ära. Proovime mängida seda riffi 5 keelel. Natukene aitab rütmikat mõista pikemad ja lühemad vahed numbrite vahel.</p>
          </div>
          <div>
            <h3>Lisaharjutus</h3>
            <p>Võiksime tegelikult ka mõelda numbritest natukene edasi. Mäletame, et 7 vahe on üldiselt täpiga meie kaelal märgistatud. Veel parem on mäletada, et A keelel asub seal vahes E noot. Veelgi parem on, kui me mäletame et 5 vahes on D noot, 3 vahes C noot, ja 2 vahes B noot. Niiet põhimõtteliselt võiksime ka aru saada sellisest kirjast (kuidki seda tavaliselt ei kasutata):</p>
            <img src={require("../../assets/posts/seven-nation-army/lisa-a-keel.png")} alt='Lisa a keel' />
            <p>Eriti proff oleks, kui saame aru ka sellest:</p>
            <img src={require("../../assets/posts/seven-nation-army/lisa-e-keel.png")} alt='Lisa e keel' />
            <p>Lisaharjutus selle looga oleks - Mängime Seven Nation Army riffi, kuid samal ajal ütleme valju häälega (või vahest ka sosinal 😊) igat nooti, mida me tunneme.</p>
            <p>Head harjutamist! Kui läheb liialt keeruliseks, võta vahelduseks mõni muu lugu või tinista niisama, see on samuti tähtis.</p>
          </div>
        </div>
      </div>
    </div>
      <Sidebar />
    </div>
    </div>
  )
}

export default SevenNationArmy