import React, { useRef, useState } from 'react';
import tootedFailist from '../data/tooted.json'

function LisaToode() {
    const [sonum, uuendaSonum] = useState("Lisa toode!");
    const [error, uuendaError] = useState(false);
    const inputiLuger = useRef();

    // function lisa() {
    //     uuendaSonum("Toode lisatud!");
    // }

    const lisa = () => {
        if (inputiLuger.current.value === "") {
            uuendaSonum("Tühja välja ei saa lisada");
        } else {
            uuendaSonum("Toode lisatud: " + inputiLuger.current.value);
            tootedFailist.push(inputiLuger.current.value);
            inputiLuger.current.value = '';
        }
    }

    const kontrolli = () => {
        if (inputiLuger.current.value === "") {
            uuendaSonum("Kohustuslik väli ei ole täidetud.");
            uuendaError(true);
            return;
        }

        if (inputiLuger.current.value.includes("!")) {
            uuendaSonum("Hyyumargiga tooteid ei saa lisada.");
            uuendaError(true);
            return;
        }

        uuendaError(false);
        uuendaSonum("");
    }

    return (
        <div>
            <div>{sonum}</div>
            <label>Uue toote nimi</label> <br />
            <input onChange={kontrolli} ref={inputiLuger} type="text" /> <br />
            <button disabled={error} onClick={lisa}>Sisesta</button> <br />
        </div>
    )
}

export default LisaToode