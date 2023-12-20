import { useState } from "react";

function Meist() {
    const [kontakt, n2itaKontakt] = useState("");
    const [valitud, muudaValitud] = useState("");

    const tootajad = [
        {
            "nimi": "Arvo",
            "ala": "Muusika",
            "telefon": "Täpsustamisel"
        },
        {
            "nimi": "Kelly",
            "ala": "Reporter",
            "telefon": "Täpsustamisel"
        },
        {
            "nimi": "Edward",
            "ala": "Kujundus",
            "telefon": "Täpsustamisel"
        },
        {
            "nimi": "Kerli",
            "ala": "Välisturud",
            "telefon": "Täpsustamisel"
        },
        {
            "nimi": "Toomas",
            "ala": "Mehhaanik",
            "telefon": "Täpsustamisel"
        },
        {
            "nimi": "Koit",
            "ala": "Klienditeenindus",
            "telefon": "Täpsustamisel"
        }
    ]

    const votaYhendust = (tootaja) => {
        n2itaKontakt(tootaja.telefon);
        muudaValitud(tootaja.nimi);
    }

    return (
    <div>
        <div>Meie töötajad</div>
        {tootajad.map((tootaja, index) => 
            <div className={tootaja.nimi === valitud ? "valitud-tekst" : undefined} key={index}>
                <div className="nimi">{tootaja.nimi}, {tootaja.ala}</div>
                <button onClick={() => votaYhendust(tootaja)}>Võta ühendust</button>
            </div>
            )}
        <br /><br />
        { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
        {/* <div>Siin on meie tutvustus, mis on nähtav localhost:3000/meist aadressil.</div>
        <div>Meie töötajad:</div>
        <br />
        <div className="nimi">John Smith</div>
        <div>Chief Technology Officer</div>
        <button onClick={() => n2itaKontakt("555-123-4567")}>Võta ühendust</button>
        <br />
        <div className="nimi">Emily Johnson</div>
        <div>Software Engineer</div>
        <button onClick={() => n2itaKontakt("555-987-6543")}>Võta ühendust</button>
        <br />
        <div className="nimi">Alex Williams</div>
        <div>Data Scientist</div>
        <button onClick={() => n2itaKontakt("555-876-5432")}>Võta ühendust</button>
        <br />
        <div className="nimi">Samantha Davis</div>
        <div>IT Manager</div>
        <button onClick={() => n2itaKontakt("555-234-5678")}>Võta ühendust</button>
        <br /> <br />
        { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>} */}
    </div> 
    );
}

export default Meist;