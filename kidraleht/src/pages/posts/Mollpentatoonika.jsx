import React from 'react'
import { useParams } from 'react-router-dom'
import postsFromFile from '../../data/posts.json'
import Sidebar from "../../components/Sidebar"
import "../../css/Single.css"
import "../../css/SinglePost.css";

const Mollpentatoonika = () => {
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
            <h3>Mollpentatoonika</h3>
            <p>Praeguseks oleme juba vaadanud üpris mitu lugu, ning sealt õpitud akordidega saame mängida ka mitmeid uusi palasid. Võiksime aga natuke proovida luua enda loomingut, võimalik et see võib osutuda päris toredaks. Sellejaoks vaatame ühte helirida, <b>mollpentatoonika</b>, mida saame lihtsasti kujutada enda kitarrikaelal, ning kohe kasutusele võtta <b>improviseerimiseks</b>.</p>
          </div>
          <div>
            <h3>A-moll pentatoonika</h3>
            <img src={require("../../assets/posts/mollpentatoonika/a-minor-pentatonic.png")} alt='A moll pentatoonika' />
            <p>Sellel pildil on kujutatud A-mollpentatoonika sõrmestust ja nootide asukohti kitarrikaelal. Alustame kõige paksemast E keelest, mis on pildil kõige all. Vasakult paremale vaadates, on esimesena märgitud punasega 1. See tähendab, et selle noodi mängimiseks kasutame enda esimest, ehk nimetissõrme. Punane tähendab, et tegelikkuses on siin meie kodunoot, ehk <b>toonika</b>. Toonikast ja improviseerimisest räägime lähemalt teises postituses.</p>
            <p>Edasi näeme, et kolme astmetraadi (krihvi) kaugusel on meil nr 4. Siin peaksime kasutama neljandat sõrme. Nimodi kogu seda helirea vormi vaadates, võiksime mõelda asjast nii, et iga vahe jaoks jätame me ühe  kindla sõrme. Ehk siis esimene vahe 1 sõrm, teine vahe 2 sõrm, kolmas vahe 3 sõrm ja neljas vahe 4 sõrm.</p>
            <p>Kui me nii mõtleme, siis saame meelde jätta, et E keelel on alati esimene ja neljas sõrm. Kuna E keeli on meil kaks tükki, kõige alumine ja ülemine, siis teame juba kõiki vajalikke noote kahel keelel.</p>
            <p>B keel, ehk peensuselt teine, on samuti esimene ja neljas sõrm. Kõik ülejäänud on esimene ja kolmas sõrm. Iseenesest võib proovida seda pähe tuupida, kuid tegelikult kõige paremini jääb see meelde ja sõrmedesse, kui tervet helirida lihtsalt üles-alla tihti mängida. Siit ka hea harjutus, mida võiks igakord soojenduseks teha, pärast pilli häälde panemist. See paneb sõrmed liikuma, viib aju õigesse kohta, ja on niisama tore näpuharjutus. 😊</p>
          </div>
          <div>
            <h3>Harjutus-soojendus</h3>
            <p>Võta suvaline täpiga asukoht kitarrikaelal. Proovi korra mõelda, mis noot seal all võiks olla. Mängi alates sellest noodist mollpentatoonika helirida üles ja alla. Proovi erinevaid tehnikaid medikaga mängides, nt alati lükates medikat alla, või siis ainult tõmmates üles, või siis vaheldumisi üles-alla. <b>Tähelepanek</b> medikaga üles-alla mängides võiks olla, et kui ühel keelel tõmbad alla-üles, siis järgmisel peaks olema ka alla-üles. Ehk siis alati alla-üles-alla-üles, mitte alla-üles-üles-alla. Muidugi ei ole kitarri peal kirja pandud reegleid kuidas seda kasutada, kuid nimodi harjutades saame aja jooksul enda parema käe väga kiiresti mööda erinevaid keeli liikuma.</p>
            <p>Selle harjutuse pidevalt mängimisega saame üsna ruttu mollpentatoonika vormi selgeks, õpime tasapisi noote kitarrikaelal, ning veel lisaks õpime kasutama ka medikat. Seega on see väga hea soojendusharjutus, et tunneksime ennast pilliga järjest mugavamalt.</p>
          </div>
        </div>
      </div>
    </div>
      <Sidebar />
    </div>
    </div>
  )
}

export default Mollpentatoonika