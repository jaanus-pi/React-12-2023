// rfce

import React, { useState } from 'react'

function Avaleht() {
    const [kogus, uuendaKogus] = useState(5);
    const [laigitud, uuendaLaigitud] = useState(false);
    const [sonum, uuendaSonum] = useState("Uuenda kogust!")

    function nulli() {
        uuendaKogus(0);
        uuendaSonum("Nullitud!")
    }

    function vahenda() {
        uuendaKogus(kogus - 1);
        uuendaSonum("Vähendatud!")
    }

    function suurenda() {
        uuendaKogus(kogus + 1);
        uuendaSonum("Suurendatud!")
    }


    console.log("re-renderdan")

    return (
        <div>
            { laigitud === false && <img src='mittelaigitud.svg' alt='' />}
            { laigitud === true && <img src='laigitud.svg' alt='' />}
            { kogus > 10 && <img src='legendaarne.svg' alt='' />}
            { laigitud === true && <button onClick={() => uuendaLaigitud(false)}>Like maha</button> }
            { laigitud === false && <button onClick={() => uuendaLaigitud(true)}>Like peale</button> }

            <br /><br />

            <div>{sonum}</div>
            { kogus !== 0 && <button onClick={nulli}>Null</button>}
            <button disabled={kogus === 0} onClick={vahenda}>-</button>
            <span>{kogus}</span>
            <button onClick={suurenda}>+</button>
        </div>
    )
}

export default Avaleht