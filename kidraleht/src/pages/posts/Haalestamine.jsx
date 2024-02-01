import React from 'react'
import { useParams } from 'react-router-dom'
import postsFromFile from '../../data/posts.json'
import Sidebar from "../../components/Sidebar"
import "../../css/Single.css"
import "../../css/SinglePost.css";

const Haalestamine = () => {
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
            <h3>Veidi teooriat:</h3>
            <p>Kitarr on tihti üks osa suuremast bändist või teosest. Enamasti me soovime, et teistega koos pilli mängides ka meie hästi kõlaksime. Sellejaoks võiksid kõik pillid omavahel koos häälestuda. Kidramehe jaoks tähendab häälestumine seda, et enne mängimist kontrollime, mis sagedustel meie keeled neid lahtiselt tõmmates võnguvad.</p>
            <p>Meie pilli kõik 6 keelt on erineva paksusega, ning häälestame neid samuti erinevatele helisagedustele. Aegade jooksul on jäänud alles kindlad sagedused, kuhu me enda pilli keeled häälestame. Selleks, et mitte liialt vaevata enda pead numbritega, tähistame neid sagedusi tähtedega.</p>
            <p>E------------- kõige peenem keel</p>
            <p>B-------------</p>
            <p>G-------------</p>
            <p>D-------------</p>
            <p>A-------------</p>
            <p>E------------- kõige paksem keel</p>
            <img src={require("../../assets/posts/haalestamine/keelte-noodid.png")} alt='keelte noodid' />
            <p>Selline on kõige levinum kitarrihäälestus, täpsemalt <i>standard tuning.</i></p>
          </div>
          <div>
            <h3>Praktikas</h3>
            <p>Kõige lihtsam on kasutada enda kitarri häälestamiseks mõnda <i>appi</i> või <i>clip-on</i> häälestajat.</p>
            <p><b>Appi</b> otsimiseks piisab sellest, et Play Poest, Apple Storest või kust iganes otsida „guitar tuner“. Rakendus mida ise kasutan on gStrings. (Aja jooksul võid avastada, et kõige rohkem läheb mängides häälest just G keel 😊) Rakenduse miinuseks võib olla ebatäpsus sagedustel, kuna kasutatakse sinu telefoni mikrofoni, kuhu võib kostuda ka igasugu muud müra lisaks kitarrile.</p>
            <img src={require("../../assets/posts/haalestamine/haalestaja-app.png")} alt='app häälestaja' />
            <p><b>Clip-on tuner</b> on füüsiline häälestaja, mis ei kasuta mikrofoni vaid hoopis vibratsioone, mida keelte võnked kitarri <i>headstock-il</i> ehk „peas“ tekitavad. Selline viis on kvaliteetse häälestaja puhul täiesti rahuldavalt täpne, ning kõige suurem eelis on kasutatavus igal pool - nii kodus toas kui õues kui ka laval. Selliseid häälestajaid on erinevaid sama palju kui erinevaid rakendusi. Ise kasutan Fender clip-on tunerit, peamiselt põhjusel et seda soovitati muusikapoes. 😊</p>
            <img src={require("../../assets/posts/haalestamine/haalestaja-clipon.png")} alt='clipon häälestaja' />
            <p>Kitarridele, mida saab ühendada ka võimendiga (nagu elektrikitarr, elektroakustiline), ehk mis on juhtmega, saab kasutada ka <b>pedaali vormis häälestajaid</b>. Selle eeliseks on kõrge täpsus, ning suurema pedal-boardi ehk effektipedaalide kogu korral saab kasutada häälestajat signaali katkestamiseks, et vältida lisa-müra nt siis, kui sa hetkel laval ei mängi. See jutt võib jääda hetkel segaseks ning selle puhul <b>ei pea tundma muret</b>. See on kirjas lihtsalt silmaringi avardadamiseks kitarri osas.</p>
            <img src={require("../../assets/posts/haalestamine/haalestaja-boss.png")} alt="pedaal häälestaja" />
          </div>
          <div>
            <h3>Kuidas siis kitarri häälestada?</h3>
            <p>Tõmba parema käega kõlama üks kitarrikeel ning vaata mida häälestaja sulle näitab. Üldiselt on lahendatud see nii, et joon kõige keskel tähendab „kõik OK“, vasakule poole jääv joon tähendab „madal“ ning paremale poole jääv joon „kõrge“.</p>
            <p>Täpselt hääles:</p>
            <img src={require("../../assets/posts/haalestamine/täpselt-hääles.png")} alt="täpselt hääles" />
            <p>Madal:</p>
            <img src={require("../../assets/posts/haalestamine/madal.png")} alt="madal" />
            <p>Kõrge:</p>
            <img src={require("../../assets/posts/haalestamine/kõrge.png")} alt="kõrge" />
            <p>Kui keel kõlab ja oled tuvastanud kas noot on madal või kõrge, kruti vasaku käega keele pingutit selles suunas kuhu on vaja. Kruttimise ajal võid üha uuesti ja uuesti keelt kõlama tõmmata. Tähtis on ainult jälgida, et seda ei teeks liiga suure jõuga, ning et kõlaks korraga ainult üks keel.</p>
            <p>Mida suurema jõuga keelt kõlama panna, seda rohkem on tema sagedus esimestel millisekunditel „kõrge“. Kitarri keel on hääles, kui teda kõlama tõmmates jääb lõpuks joon ilusti keskele.</p>
            <p>Kui see jutt jääb segaseks on kõige parem vaadata mõnda YouTube videot. Hea õpetaja youtubes sellistel teemadel on näiteks JustinGuitar.</p>
          </div>
          <div>
            <h3>Lisa</h3>
            <p>Noodid ehk sagedused muusikas on nimetatud tähestikulises järjekorras. A B C D E F G. Üldiselt aga muusikas algab kõik C noodist, seega tihti tasub mõelda nootidest kui C D E F G A B C. Aja jooksul erinevates situatsioonides muusikas kulub see pähe, ehk ei pea hetkel pingutama selle õppimisega. Seda teadmist saab aga kasutada häälestamisel, kui oled pannud peale just uued keeled või sinu kitarr on väga häälest ära. Häälestades nt D keelt, saan ma jälgida pingutit keerates häälestajalt, kas peaksin häälestama veel kõrgemale: näiteks on mul häälestajas noot C, siis peaksin minema ühevõrra kõrgemale et jõuda D noodini. Või olen kogematta juba pannud mööda õigest noodist, kui ees on E. Siis peaksin keerama pingutit tagasi, ja saama madalama noodi, mis on D (tähestik C – D – E). Lisaks aitab teadmine, et b noodi nimetuse ees või taga, tähendab alati madalat (Cb), ning # kõrget (C#).</p>
            <p>Häälestamiseks ongi tegelikult palju erinevaid viise ja trikke, mis ei pea üldsegi olema seotud tehnoloogiaga. Seda saab ka teha näiteks klaveri või muu juba hääles instrumendi järgi, kõrva järgi kui üks keel on juba kindlalt hääles, jnejne. Aja jooksul leiab igaüks endale ise kõige parema mõtteviisi häälestamisest ja mugavaimad võtted selle teostamiseks.</p>
          </div>
        </div>
      </div>
    </div>
      <Sidebar />
    </div>
    </div>
  )
}

export default Haalestamine