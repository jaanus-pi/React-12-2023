import { useState } from "react"

function Kontakt() {
    const [n2itaTelKristiine, muudaN2itaTelKristiine] = useState(false);
    const [n2itaTelYlemiste, muudaN2itaTelYlemiste] = useState(false);
    const [n2itaTelTasku, muudaN2itaTelTasku] = useState(false);

    return ( <div>
        <div>Siin on kontaktid, mis on nähtav localhost:3000/kontakt aadressil.</div>
        <div>Võta meiega ühendust:</div>
        <br />
        <div className={n2itaTelKristiine === true ? "nimi valitud-v2li" : "nimi keskus"} onClick={() => muudaN2itaTelKristiine(!n2itaTelKristiine)}>Kristiine keskus</div>
        {n2itaTelKristiine && <div className="valitud-tekst">+372 5554 4445</div>}
        <div className={n2itaTelKristiine === true ? "valitud-tekst" : undefined}>Endla 45</div>
        <br />
        <div className={n2itaTelYlemiste === true ? "nimi valitud-v2li" : "nimi keskus"} onClick={() => muudaN2itaTelYlemiste(!n2itaTelYlemiste)}>Ülemiste keskus</div>
        {n2itaTelYlemiste && <div className="valitud-tekst">+372 3334 4448</div>}
        <div className={n2itaTelYlemiste=== true ? "valitud-tekst" : undefined}>Suur-Sõjamäe 4</div>
        <br />
        <div className={n2itaTelTasku === true ? "nimi valitud-v2li" : "nimi keskus"} onClick={() => muudaN2itaTelTasku(!n2itaTelTasku)}>Tasku keskus</div>
        {n2itaTelTasku && <div className="valitud-tekst">+372 3332 1112</div>}
        <div className={n2itaTelTasku=== true ? "valitud-tekst" : undefined}>Turu 2</div>
        <br />
    </div> );
}

export default Kontakt;