// rfce
// salvestada saab lokaalmällu brauseris. Nt keel, teema, Infinite scroll, ..ainult selle isiku arvutis ja brauseris. Eksisteerib igavesti selle urli all.
// andmebaasi: koigile jagatav. nt tooted. Klient saab lisada-kustutada.
// faili, aga peab tegema pikka koodi kirjutamiseks. Paris projektidessse ei kirjutata failidesse.

import React, { useState } from 'react'

function Avaleht() {
    const [kogus, uuendaKogus] = useState(Number(localStorage.getItem("kogus")) || 0);
    const [laigitud, uuendaLaigitud] = useState(Boolean(localStorage.getItem("like")) || false);
    const [sonum, uuendaSonum] = useState("Uuenda kogust!")

    function nulli() {
        uuendaKogus(0);
        uuendaSonum("Nullitud!")
        localStorage.setItem("kogus", 0);
    }

    function vahenda() {
        uuendaKogus(kogus - 1);
        uuendaSonum("Vähendatud!")
        localStorage.setItem("kogus", kogus - 1);
    }

    function suurenda() {
        uuendaKogus(kogus + 1);
        uuendaSonum("Suurendatud!")
        localStorage.setItem("kogus", kogus + 1);
    }

    function laikMaha() {
        uuendaLaigitud(false);
        localStorage.setItem("like", false);
    }

    function laikPeale() {
        uuendaLaigitud(true);
        localStorage.setItem("like", true);
    }


    console.log("re-renderdan")

    return (
        <div>
            { laigitud === false && <img src='mittelaigitud.svg' alt='' />}
            { laigitud === true && <img src='laigitud.svg' alt='' />}
            { kogus > 10 && <img src='legendaarne.svg' alt='' />}
            { laigitud === true && <button onClick={laikMaha}>Like maha</button> }
            { laigitud === false && <button onClick={laikPeale}>Like peale</button> }

            <br /><br />

            <div className={kogus > 10 ? 'kuldne' : undefined}>{sonum}</div>
            { kogus !== 0 && <button onClick={nulli}>Null</button>}
            <button disabled={kogus === 0} onClick={vahenda}>-</button>
            <span className={kogus > 10 ? 'kuldne' : undefined}>{kogus}</span>
            <button onClick={suurenda}>+</button>
        </div>
    )
}

export default Avaleht