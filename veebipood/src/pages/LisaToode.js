import React, { useRef, useState } from 'react';

function LisaToode() {
    const [sonum, uuendaSonum] = useState("Lisa toode!");
    const inputiLuger = useRef();

    // function lisa() {
    //     uuendaSonum("Toode lisatud!");
    // }

    const lisa = () => {
        if (inputiLuger.current.value === "") {
            uuendaSonum("Tühja välja ei saa lisada");
        } else {
            uuendaSonum("Toode lisatud: " + inputiLuger.current.value);
        }
    }

    return (
        <div>
            <div>{sonum}</div>
            <label>Uue toote nimi</label> <br />
            <input ref={inputiLuger} type="text" /> <br />
            <button onClick={lisa}>Sisesta</button> <br />
        </div>
    )
}

export default LisaToode