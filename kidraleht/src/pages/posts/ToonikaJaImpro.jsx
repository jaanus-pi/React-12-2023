import React from 'react'
import { useParams } from 'react-router-dom'
import postsFromFile from '../../data/posts.json'
import Sidebar from "../../components/Sidebar"
import "../../css/Single.css"
import "../../css/SinglePost.css";

const ToonikaJaImpro = () => {
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
            <h3>Toonika</h3>
            <p>Toonika ehk kodunoodi teadmine on oluline sellejaoks, et me saaksime seda sama mollpentatoonika vormi mängida ükskõik millises <b>helistikus</b>. </p>
            <p>Helistiku määrab tavaliselt loo esimene akord, ning veel tihedamini loo viimane akord. Nt Country Roads algab G duuriga ning samuti lõppeb G duuriga. Kui me mängime korra kõik country roadsi akordid läbi, siis tunneme, et jõudes viimasesse G duuri, siis kõik kuidagi heliliselt lahendub, ning me jõuaks nagu mingi osa või täiesti loo lõppu. Sellise tunnetuse kohta on olemas ka oma muusikateooria, kuid meie nii sügavuti hetkel ei lähe.</p>
            <p>Meie jaoks on oluline aru saada, et <b>Country Roads helistik on G</b>.</p>
            <p><b>!</b>!(igaksjuhuks mainin, et vältida segadust kui peaksid mängima kaasa YouTubest. Kui mängime <b>capoga</b>, siis tegelikult ei ole meil C akord, vaid C kuju, A kuju, G kuju jne. Lihtsuse mõttes räägin ikkagi hetkel neist kui “akordidest” helistikus. Samamoodi räägin ka G kujust Country Roadsis, kuidki täpselt rääkides on pala originaalhelistik hoopis A duur)!<b>!</b></p>
            <p>Kauges külas on aga huvitav näide. </p>
            <p>Meie loo materjalides algab kauges külas C akordist. Viimane akord on meil aga “teistsuguse” koha peal, mis lõppeb hoopis G duuriga. Kui me mängime korra refrääni ning siis teistsugust kohta, on väga imelik jätta pikalt kõlama viimane G duur. Imelik vb pole õige sõna, kuid kindlasti ei saa me öelda, et lugu lõpuks “lahendub kindlasse kohta”, nagu oli Country Roadsi lõpus. </p>
            <p>Mängime nüüd korra samamoodi, aga tõmbame lõppu, peale G, siiski lihtsalt ühe C duuri. Nüüd meie kõrv ma arvan kuuleb, et kõik lahendus õigesse kotha - asi jõudis lõppu. Tegelikult kui kuulata ka originaallaulu youtubest, siis laulja lõpetab enda laulmise selles teistsuguses kohas, kuid instrumendid mängivad ikka paar takti C duuri lisaks. Arvatavasti selleks et oleks ilus konkreetne lõpp.</p>
            <p>See kõik toob meid aga tagasi <b>toonika</b> juurde. Country Roadsi toonika on G noot, kuna kõik laheneb sellest noodist tulevasse akordi. G duur on Country Roadsi helistik. Kui me soovime improviseerida, on meil oluline seda teada, kuna me tahaksime, et meie helirea noodid kõlaksid samuti loo helistikuga kokku.</p>
          </div>
          <div>
            <h3>Improviseerimine mollpentatoonikaga</h3>
            <p>Kui me tahame mängida G mollpentatoonikat, peame enda kõige esimese sõrme kõige paksemal keelel panema G noodile, mis asub kolmandas vahes. Kui me tahame mängida A mollpentatoonikat, siis peame alustama hoopis viiendast vahes, ehk A noodist.</p>
            <p><b>G-moll pentatoonika</b></p>
            <img src={require("../../assets/posts/toonika-ja-impro/G-moll-pentatoonika.png")} alt='G moll pentatoonika' />
            <p><b>A-moll pentatoonika</b></p>
            <img src={require("../../assets/posts/toonika-ja-impro/A-moll-pentatoonika.png")} alt='A moll pentatoonika' />
            <p>Võime aga leida, et G mollpentatoonika endiselt ei sobi väga hästi meie Country Roadsi peale. !(Igaksjuhuks mainin jälle - Originaalis (nt kuulates YouTubest) on üldse Country Roads A duurist mitte G’st, kuid isegi kui A mollpentatoonika nagu enamvähem peaaegu sobib, ei ole see kõrvale ikka päris nii hea)!. See kõik tuleneb sellest, et ka siin on oma muusikateooria, millesse me hetkel ei süvene 😊</p>
            <p>Meie võime <b>improviseerimiseks kirjutada YouTube “Blues backing track in -helistik-“</b>. Otsime nt blues backing track in G. Võtame kolmanda vahe, kus asub meie G noot, ning hakkame sealt mängima pentatoonikat üles alla. Kõlab ma arvan väga hästi. Nüüd proovime mitte mängida üles alla, vaid kasutades suvalisi noote meie helireas, näiteks D keelel esimene ja kolmas sõrm, siis G keelel 1 sõrm, ja tagasi D keelel 3 sõrm. Hurra, nüüd me juba improviseerime – ehk loome kohapeal iseenda muusikat, mida enne ei eksisteerinud. Päris lahe. Katseta ja proovi mängides erinevaid noote kiirelt, aeglaselt, ning kui tunned ennast mugavalt, ära mõtle mitte millelegi, ning lihtsalt proovi mängida midagi sinu arvates lahedat või ilusat. Tunne ennast vabalt. Kõik noodid sinu sõrmede all on sobivad taustaga, ning ühtegi „õiget“ rütmi pole olemas. Lase tulla sellel mis tuleb.</p>
          </div>
        </div>
      </div>
    </div>
      <Sidebar />
    </div>
    </div>
  )
}

export default ToonikaJaImpro