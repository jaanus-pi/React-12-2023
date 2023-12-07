import { useState } from "react"

function Kontakt() {
    const [n2itaTelKristiine, muudaN2itaTelKristiine] = useState(false);
    const [n2itaTelYlemiste, muudaN2itaTelYlemiste] = useState(false);
    const [n2itaTelTasku, muudaN2itaTelTasku] = useState(false);

    return ( <div>
        <div>Siin on kontaktid, mis on nähtav localhost:3000/kontakt aadressil.</div>
        <div>Võta meiega ühendust:</div>
        <br />
        <div className="nimi keskus" onClick={() => muudaN2itaTelKristiine(!n2itaTelKristiine)}>Kristiine keskus</div>
        {n2itaTelKristiine && <div>+372 5554 4445</div>}
        <div>Endla 45</div>
        <br />
        <div className="nimi keskus" onClick={() => muudaN2itaTelYlemiste(!n2itaTelYlemiste)}>Ülemiste keskus</div>
        {n2itaTelYlemiste && <div>+372 3334 4448</div>}
        <div>Suur-Sõjamäe 4</div>
        <br />
        <div className="nimi keskus" onClick={() => muudaN2itaTelTasku(!n2itaTelTasku)}>Tasku keskus</div>
        {n2itaTelTasku && <div>+372 3332 1112</div>}
        <div>Turu 2</div>
        <br />
    </div> );
}

export default Kontakt;