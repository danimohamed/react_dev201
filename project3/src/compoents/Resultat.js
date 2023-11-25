export function Resultat(props) {
    return (
        <div style={{ backgroundColor: "green" }}>
            <h2>Composant Resultat</h2>
            <div>
                Liste Stagiares : {props.res.map(s => <li>{s.nom}</li>)}
            </div>
        </div>
    )
}