import React, { useState } from "react"

export function Chercher(props) {
    const [mot, setmot] = useState()
    function trouver(event) {
        event.preventDefault()
        props.ontrouve(mot)
    }
    return (
        <form onSubmit={(event) => { trouver(event) }} style={{ backgroundColor: "yellow" }}>
            <h2>Composant chercher</h2>
            <label>Entrer le mot cle de recherche :</label>
            <input type="text" value={mot} onChange={event => setmot(event.target.value)} />
            <button>cherche</button>
        </form>
    )
}