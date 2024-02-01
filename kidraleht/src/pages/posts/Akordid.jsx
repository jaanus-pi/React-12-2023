import React from 'react'
import { useParams } from 'react-router-dom'
import postsFromFile from '../../data/posts.json'
import Sidebar from "../../components/Sidebar"
import "../../css/Single.css"
import "../../css/SinglePost.css";

const Akordid = () => {
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
            <h3>Akordid kitarril</h3>
            <p>Akordiks nimetatakse mõnda kindlat kõla, kus helisevad üheaegselt koos vähemalt kaks keelt. Aja jooksul on kujunenud välja mõned kindlad akordid, mis meie kõrvadele hästi kõlavad. Neid samu akorde on kasutanud ja kasutavad ka edaspidi kõiksugu erinevad muusikud, seega on ka meil neid hea tunda, kuna koos akordidega suudame mängida juba lõpmatu arv erinevaid lugusid.</p>
            <p>Kõige populaarsemad ja tavalisemad akordid on:</p>
            <p><b>C	A	G	E	D</b></p>
            <p>Selleks et õppida neid mängima, võime kasutada <b>vorme</b>, kus kujutame triipudega erinevaid kitarri keeli ja vahesid.</p>
            <p>Näiteks võin neid käega joonistada nii:</p>
            <img src={require("../../assets/posts/akordid/joonistus.png")} alt='joonistus' />
            <p>Siin on näha, et olen kujutanud kõik keeled pikkupidi joontega ning vahed ristipidi joontega. Keeled olen üleval märkinud tühja keelt mängides kõlava noodi nimetustega, kuid lihtsuse mõttes võime ka lihtsalt kirjutada ja lugeda:</p>
            <p>1. keel (kõige peenem), 2. keel (sellest järgmine), kuni 6. keel (kõige paksem).</p>
            <p>Akordi vormidega polegi midagi muud, kui lihtsalt näidata <b>kuhu panna oma vasaku käe sõrmed</b> selle akordi mängimiseks, ning samuti <b>milliseid keeli parema käega panna kõlama</b>.</p>
          </div>
          <div>
            <p>Siin on <b>kõige tavalisemad akordid</b> ja nende kõige levinumad kujud mängimiseks.</p>
            <img src={require("../../assets/posts/akordid/caged.png")} alt='joonistus' />
            <p>Kõigepealt näeme, et osad vahed ja keeled on nüüd märgistatud numbritega. Näiteks A akordi puhul: teisel keelel, teises vahes, on number 3. </p>
            <p>Number 3 tähendab kolmandat sõrme, küll aga ei loe me siin enda pöialt. Sellega polegi midagi teha, kui lihtsalt teada. Visualiseerimiseks väike hästi joonistatud joonis:</p>
            <img src={require("../../assets/posts/akordid/vasak-käsi.png")} alt='vasak käsi' />
          </div>
          <div>
            <p>Lisaks tavalistele akordidele, mida nimetame pikemalt <b>duur akordiks</b> (nt A kohta ütleme „A duur“), võime tihti kohata ka nende kurvakõlalisi ja pisut süngemaid sugulasi - <b>moll akorde</b>. Neid tähistatakse tihti m tähega. Näiteks Am kohtamise puhul ütleme selle kohta „A moll“. Siin on mõned levinud moll akordid: </p>
            <img src={require("../../assets/posts/akordid/moll.png")} alt='moll' />
            <p>Analüüsides neid vorme näeme jälle, kuhu peaksime paigutama enda vasaku käe millised sõrmed. Lisaks näeme aga üleval pool <b>tähiseid X ja 0</b>. See info käib kõik nüüd parema käe kohta, ehk millistel keeltel me reaalselt kõlada laseme. Näiteks Dm (D Minor) puhul näeme, et 6. ja 5. keele kohal on X. Neid keeli me selle akordi puhul ei puutu. Samas näeme 4. keelel kohal 0 märki. See tähendabki, et tõmbame seda keelt tühjalt, ilma ühtegi vasaku käe sõrme kasutamata kaasa.</p>
          </div>
          <div>
            <h3>Kõige selle kokkuvõtteks:</h3>
            <p>Pikkupidi jooned tähistavad <b>keeli</b>, ristipidi jooned tekitavad <b>vahed</b> nagu need on kitarri kaelal.  </p>
            <p><b>Numbrid:</b> Milliseid sõrmi võiksime vasaku käe puhul rakendada nende kujude mängimiseks.</p>
            <p><b>0:</b> Mängime ka seda keelt, kuid avatult ehk ilma ühtegi vasaku käe sõrme kasutamata. (open string)</p>
            <p><b>X:</b> Sellega tähistatud keelt väldime.</p>
          </div>
          <div>
            <h3>Hea harjutus:</h3>
            <p>Võta üks duur akord ning tema moll sugulane. Näiteks A ja Am. Mängi neid vaheldumisi: </p>
            <p><b><i>pane vasaku käe sõrmed paika, tõmba kõlama A duur, vaheta sõrmed A moll kujule, tõmba kõlama A moll.</i></b></p>
            <p>Võid avastada, et tihti duur ja moll kuju puhul erineb ainult ühe sõrme paigutus. Teades üht tead juba peaaegu teist. See tähendab, kui enne teadsid juba lõpmatu arv lugusid, siis nüüd tead lõpmatus * 2 lugusid. 😊</p>
            <p><b>Mis kõige tähtsam:</b> Proovi kuulata mida sa mängid - kuidas erinevad kõla poolest duur ja moll? Milline sulle rohkem meeldib? Kas neil on kuidagi erinev „tuju“?</p>
            <p><b>Ja kõigest veelgi tähtsam:</b> Ära kaota lõbu kitarri juures! Kui duuritamisest ja mollitamisest kopp ees, võta mõni pala, nt „Country Roads“ või „Kauges Külas“, ja proovi seda kaasa mängida. Mängi paar korda akordid ise läbi ja siis pane lugu Youtubes käima. Võid ka panna selle aeglasemalt mängima, nt 0.5x kiirusel. Vaata kuidas välja tuleb. Kui täna tuli halvasti, võid kindel olla et juba homme tuleb paremini!😊 </p>
          </div>
        </div>
      </div>
    </div>
      <Sidebar />
    </div>
    </div>
  )
}

export default Akordid