import React, { useRef, useState } from 'react';
import tootedFailist from '../data/tooted.json'

function LisaToode() {
    const [sonum, uuendaSonum] = useState("Lisa toode!");
    const [error, uuendaError] = useState(false);
    const inputiLuger = useRef();
    const hindRef = useRef();
    const aktiivneRef = useRef();
    const piltRef = useRef();

    // function lisa() {
    //     uuendaSonum("Toode lisatud!");
    // }

    const lisa = () => {
        if (inputiLuger.current.value === "") {
            uuendaSonum("Tühja välja ei saa lisada");
        } else {
            uuendaSonum("Toode lisatud: " + inputiLuger.current.value);
            const uusToode = {
                "nimi": inputiLuger.current.value, 
                "hind": Number(hindRef.current.value), 
                "aktiivne": aktiivneRef.current.checked, 
                "pilt": piltRef.current.value
            }
            tootedFailist.push(uusToode);
            inputiLuger.current.value = '';
            hindRef.current.value = '';
            piltRef.current.value = '';
            aktiivneRef.current.value = false;
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
            <label>Uue toote hind</label> <br />
            <input ref={hindRef} type="number" /> <br />
            <label>Uue toote pilt</label> <br />
            <input ref={piltRef} type="text" /> <br />
            <label>Uue toote aktiivus</label> <br />
            <input ref={aktiivneRef} type="checkbox" /> <br />
            <button disabled={error} onClick={lisa}>Sisesta</button> <br />
        </div>
    )
}

export default LisaToode