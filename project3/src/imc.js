import React, { useState } from 'react';

export const CalculIMC = () => {
    const [poids, setPoids] = useState('');
    const [taille, setTaille] = useState('');
    const [imc, setImc] = useState('');
    const [etat, setEtat] = useState('');
    const [couleur, setCouleur] = useState('');

    const calculerIMC = () => {
        if (poids && taille) {
            let valeurIMC = (poids) / ((taille) * (taille));
            setImc(valeurIMC.toFixed(2));

            if (valeurIMC >= 18.5 && valeurIMC <= 24.5) {
                setEtat('Normale');
                setCouleur('green');
            } else if (valeurIMC < 18.5) {
                setEtat('Sous poids');
                setCouleur('orange');
            } else {
                setEtat('Surpoids');
                setCouleur('red');
            }
        } else {
            setImc('');
            setEtat('');
            setCouleur('');
        }
    };

    return (
        <div>
            <h1>Calculateur IMC</h1>
            <div>
                <label>Poids (kg) :</label>
                <input type="number" value={poids} onChange={(e) => setPoids(e.target.value)} />
            </div>
            <div>
                <label>Taille (m) :</label>
                <input type="number" value={taille} onChange={(e) => setTaille(e.target.value)} />
            </div>
            <button onClick={calculerIMC}>Calculer</button>
            {imc && (
                <div>
                    <h2>IMC : {imc}</h2>
                    <h2 style={{ color: couleur }}>{etat}</h2>
                </div>
            )}
        </div>
    );
};

export default CalculIMC;