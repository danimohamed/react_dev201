import { useState } from "react"

export function Imc() {
    const [Poids, setPoids] = useState();
    const [Taille, setTaille] = useState();
    const [imc, setImc] = useState();
    const [message, setMessage] = useState('')
    const [c, setc] = useState('')
    const calcule = () => {
        if (!isNaN(Poids) && !isNaN(Taille)) {
            var cal = Poids / (Taille * Taille);
            setImc(cal.toFixed(2));
        } else {
            alert("Remplir les champs vides")
        }
        if (cal >= 18.5 && cal <= 24.5) {
            setMessage('Normale')
            setc('green')
        }
        if (cal < 18.5) {
            setMessage('Sous poids')
            setc('red')
        }
        if (cal > 24.5) {
            setMessage('Sur poids')
            setc('orange')
        }
    }
    return (
        <div>
            <h2>Indice de masse corporelle</h2>
            <label>Poids en (Kg)</label><br />
            <input type="number" required onChange={(e) => setPoids(e.target.value)} /><br />
            <label>Taille en (métre)</label><br />
            <input type="number" required onChange={(e) => setTaille(e.target.value)} /><br />
            <button onClick={calcule}>Calculer</button>
            <p><b>IMC:{imc} <span style={{ color: c }}>{message}</span></b></p>
        </div>
    )
}