import React from 'react'
import { useParams } from 'react-router-dom'
import postsFromFile from '../../data/posts.json'
import Sidebar from "../../components/Sidebar"
import "../../css/Single.css"
import "../../css/SinglePost.css";

const BarreAkordid = () => {
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
              <span className="singlePostAuthor">Autor: name</span>
            </div>
            <div className="postContent">
              {post.description}
              <hr />
              <div>
                <h3>Barre akordid</h3>
                <p>Kaks kõige keerulisemat akordi kitarril on alguses arvatavasti F duur ja B moll (lühidalt kirjutatakse <b>F</b> ja <b>Bm</b>). Hea uudis on see, et neid tundes teame me juba kõiki põhilisi akorde kitarril. See tähendab, et võime õppida mängima igat lugu.</p>
                <p>Keeruliseks teeb need kaks akordi see, et vaja on mängida väga mitut keelt korraga, F’i puhul kõiki 6-te keelt ja Bm puhul 5-te keelt. Sealhulgas paeb olema igas vahes mõni sõrm, ehk me ei kasuta ühtegi lahtist keelt, erinevalt näiteks D ja G duurist. Kuna meil on mängimiseks vaid 4 sõrme (eeldusel et kõik on töökorras ega pole ühtegi puudu), siis peame nende akordide jaoks kasutama <b>barre-d</b>. Barre tähendab, et pressime ühe sõrme all mitut erinevat nooti. Inglise keeles on selle nimetus <b>bar</b>, ehk nagu riba, või joon – täpselt selliselt me ka enda ühte sõrme kasutame.</p>
              </div>
              <div>
                <h3>F duur</h3>
                <img src={require("../../assets/posts/barre-akordid/F.png")} alt='F' />
                <p>F duur koosneb põhimõtteliselt kahest osast. Bar’ist ja E duurist. Esiteks on meil E duur, kuid natukene teistsuguse sõrmitsusega kui oleme harjunud – näppude numbreid näeb siin pildil. Kui me toome E duuri ühe vahe võrra üles, peaksime katma tekkinud tühja vahe. Seda teeme enda esimese sõrmega kasutades <b>bar’i</b>.</p>
                <p>Tõsiasi on see, et selle duuri ära õppimiseks peab lihtsalt harjutama, ning leidma endale mugava viisi selle mängimiseks, kuna meie kõigi käed on erinevad, ning mis võib olla mugav ühe jaoks pole nii teise jaoks. Selle positsiooni leidmiseks võta enda vasaku käega rahulikult – lõdvesta seda ja liiguta üles alla, paremale vasakule jne, samuti tee nii pöidlaga.</p>
              </div>
              <div>
                <p>Üks soovitus:</p>
                <p>Pöial võib olla pigem natuke sirgemalt kui muidu, ning <b>umbes 2 vahe taga</b>. Selle mõtte on, et meil on nõnda kergem „tugevamalt pressida“ kitarrikaela, võrreldes sellega kui meie pöial oleks nt 1. vahe juures. Siis me pressiksime põhimõtteliselt ainult pöidla ja esimese sõrme vahel kaela, mitte enam kõikide sõrmede.</p>
                <img src={require("../../assets/posts/barre-akordid/soovitus-hea.png")} alt='soovitus-hea' />
                <img src={require("../../assets/posts/barre-akordid/soovitus-halb.png")} alt='soovitus-halb' />
                <p>Samuti võib ka proovida, kas me suudaksime vasakut kätt „tõmmates“ ilma pöidlata mängida F’i. Kui meil mõnes positsioonis see õnnestub, siis pöidla lisades võib nii samuti päris mugav olla, kuna me ei pea nii palju pressimisjõudu kasutama. </p>
                <img src={require("../../assets/posts/barre-akordid/soovitus-lisa.png")} alt='soovitus-lisa' />
              </div>
              <div>
                <h3>B moll (Bm)</h3>
                <img src={require("../../assets/posts/barre-akordid/Bm-irl.png")} alt='Bm irl' />
                <img src={require("../../assets/posts/barre-akordid/Bm-joonis.png")} alt='Bm joonis' />
                <p>Bm’i puhul peame kasutama jällegi bar’i, kuid seekord natukene vähesematel keeltel. Võib tähele panna ka siin, et Bm’i kuju koosneb Am kujust ja barist, nii nagu F’i puhul oli E duur ja bar. Peamiselt on siin sama lugu nagu F’iga, kuid tuleb üks tähelepanek – me proovime bar’i hoidva nimetissõrme otsaga <b>„tummistada“ (mute) 6. ehk kõige paksemat keelt</b>. See tähendab seda, et kui tõmbame parema käega üle kõikide keelte, siis ei kostu meile 6 keelt, vaid ainult „kerge plärin“ mida ei ole kuulda.</p>
                <p><b>Mute</b>-miseks kasutame vasaku käe nimetissõrme otsa nii:</p>
                <img src={require("../../assets/posts/barre-akordid/mute.png")} alt='mute' />
                <p>Me ei pressi alla 6 keelt, vaid kergelt katsume seda enda sõrme otsaga. Ka akordivormi joonisel on näha, et 6 keele kohal on X.  Sellist tehnikat võib kasutada igasuguste akordidega, kui soovid et kõla oleks natukene huvitavam ja teistsugune. „Plärin“ mis sellest tekib ei ole akustilise kitarri puhul samuti halb, vaid tekitab isegi natuke ägedat tunnetust juurde, kui kiirelt ja paraja jõuga üle keelte tõmmata.</p>
              </div>
              <div>
                <h3>Kokkuvõtteks</h3>
                <p>Siin on natuke palju teksti, mida tasub esialgu vaid korra üle lugeda. Kõige parem on neid akorde lihtsalt proovida ja harjutada. Neist on tulevikus palju kasu, kuna neid vorme saame tegelikult kasutada ka ükskõik millise teise akordi mängimiseks.</p>
                <p>Raske kuid hea <b>harjutus</b> oleks <b>korda-mööda mängida F’i ja Bm’i</b>. Seda ei pea palju tegema, kuid vahepeal tasuks proovida. Mõlemat akordi saab proovida nii tavalises kui ka capoga <b>„Kauges Külas“</b> versioonis.</p>
              </div>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </div>
  )
}

export default BarreAkordid