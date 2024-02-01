import React from 'react'
import { useParams } from 'react-router-dom'
import postsFromFile from '../../data/posts.json'
import Sidebar from "../../components/Sidebar"
import "../../css/Single.css"
import "../../css/SinglePost.css";

const Noodid = () => {
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
            <p><b>E ja A keel</b> on meie kitarri kaks kõige paksemat keelt. Tuleb ka välja, et nad on ühed kasulikumad, mida lähemalt tundma õppida - täpsemalt tahaksime uurida, mis noodid kus vahes asuvad. Kui oleme ära õppinud nii F’i kui ka Bm’i, ning tunneme ennast neid mängides mugavalt, saame kasutada E ja A keele nootide asukohti ka kõikide teiste akordide mängimiseks.</p>
            <p>Vahest kasutatakse lugudes avatud positsioonis akorde (open chords), vahest barre akorde (bar chords), vahest power chorde, vahest ka avatud akorde kinnistel positsioonidel.... Tehakse igasugu asju, millest ka meie ükskord aru saame, kuid sellejaoks oleks vaja tunda kahte kõige paksemat keelt. Õnneks on meie kitarril selle õppimiseks ja meelde jätmiseks väiksed vihjed:</p>
            <img src={require("../../assets/posts/noodid/kidra-kael.png")} alt='kidra kael' />
            <p>Meie kaelal on <b>täpikesed</b>, mis tähistavad kindlaid vahesid: 3 vahe, 5 vahe, 7 vahe, 9 vahe ja 12 vahe. Siin on vaid üks oluline asi - 12 vahes algab järgmine oktav, ehk kõlab sama noot mis lahtisel keelel, kuid oktav kõrgemalt. See tähendab ka seda, et peale 12. vahet hakkab kõik korduma – samasugused noodid, samasugused akordivormid jnejne.</p>
            <img src={require("../../assets/posts/noodid/noodid-E-keel.png")} alt='Noodi E keelel' />
            <p>Siin pildil on tähistatud noodid kõige paksemal 6 ehk E keelel, mis asetsevad nendes vahedes. Meie võiksime hetkel muretseda vaid <b>kuni 7 vaheni</b>, ehk kus asub <b>G</b>, kus <b>A</b>, ning kus <b>B</b>.</p>
          </div>
          <div>
            <p>Sama moodi saame saame vaadata ka 5 ehk A keele noote. Kasutame nüüd lihtsalt arvutis joonistatud pilti kitarrikaelast.</p>
            <img src={require("../../assets/posts/noodid/noodid-A-keel.png")} alt='Noodi A keelel' />
            <p>Sellel keelel võiksime samuti teada <b>täppidel asuvaid noote kuni 7 vaheni</b>.</p>
            <p>Me näeme, et lisaks asub teises vahes B noot. Kui meenub, siis sealt algas ka Bm akord. Kuna enam me ei vaatle akorde, vaid noote üksinda, võime me öelda, et <b>5 keele 2. vahes on B noot</b>. Samamoodi võime öelda, et <b>6 keele 1. vahes on F noot</b>.</p>
            <p>Kõiksugu <b># ja b märgistused</b> võime hetkel täiesti vaba meelega <b>ignoreerida</b>.</p>
          </div>
          <div>
            <h3>Mida tasuks õppida:</h3>
            <p><b>6 keel ehk E keel</b>: kus asuvad noodid <b>F</b>, <b>G</b>, <b>A</b> ja <b>B</b>.</p>
            <p><b>5 keel ehk A keel</b>: kus asuvad noodid <b>B</b>, <b>C</b>, <b>D</b> ja <b>E</b>.</p>
            <p>Kui me enam-vähem neid noote tunneme, võime võtta enda <b>F duuri</b>. Liigutame nüüd sõrmi nii, et nimetissõrm, ehk sõrm mis võtab <b>bar’i</b>, on G noodi peal, ehk 3. vahes. Tõmbame kõlama. Vahetame sõrmed meie enne õpitud avatud positsioonis G duuri peale. Tõmbame kõlama. Asjad peaksid kõlama nii, et üldiselt oleks nagu tegu sama akordiga, kuid natuke teist „värvi“. Nii olemegi ära õppinud „avatud positsioonis G“ ja „G barre akordi“. Sama kehtib ka teiste nootide kohta 6 keelel. </p>
            <p>5 keelel võime katsetada <b>Bm</b> vormi erinevatel nootidel. Proovi näiteks Bm liigutada 7 vahesse. Nüüd kõlab Em. Ka seda akordi oskame me mängida nüüd kahte moodi – Em avatud positsioonis, Em barre akordina.</p>
          </div>
          <div>
            <h3>Hea lugu ja harjutus:</h3>
            <p>Noodid on samuti pigem keeruline osa kitarri juures – neid on palju erinevaid ja koos akordidega võib informatsiooni olla üleliia palju, arvestades et muidu on muusika pigem lõbusam ja vabam asi kui niisama asjade pähe tuupimine. Toredam ja põnevam ongi õppida noote koos muusikaga. Hea lugu harjutamiseks oleks „Seven nation army“. Mida täpsemalt seal jälgida on kirjutatud selle loo postituses.</p>
          </div>
        </div>
      </div>
    </div>
      <Sidebar />
    </div>
    </div>
  )
}

export default Noodid