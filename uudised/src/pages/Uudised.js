import { Link } from "react-router-dom";

function Uudised() {
    const uudised = JSON.parse(localStorage.getItem("uudised")) || [];

    return ( <div>
        <div>Siin on uudised, mis on nähtav localhost:3000/uudised aadressil.</div>
        {uudised.length === 0 && <div>Uued uudised puuduvad</div>}
        <div>{uudised.map((uudis, index) => 
            <div>
                <Link to={"/yks-uudis/" + index}>{uudis}</Link>
            </div>
        )}</div>
        {/* { uudised.length === 0 ? 
            <div>Uued uudised puuduvad.</div> : 
            uudised.map(uudis => <div>{uudis}</div>)
        } */}
    </div> );
}

export default Uudised;