import React, { useState } from "react";

const JeuDe = () => {
  const [cont, setCont] = useState(0);
  const [resultat, setResultat] = useState(null);

  const jeu = () => {
    const n = Math.floor(Math.random() * 6 + 1);
    setResultat(n);
    setCont(cont + 1);
  };

  const initializeGame = () => {
    setCont(0);
    setResultat(null);
  };

  const diceImageSrc = resultat ? `image/${resultat}.jpg` : null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <img src="image/icon.jpg" alt="icon" />
      <h1>Jeu de</h1>
      {diceImageSrc && <img src={diceImageSrc} alt={`Dice result: ${resultat}`} />}
      
      <div>
        <h2>Face: {resultat}</h2>
        <h2>Nombre d'essai: {cont}</h2>
      </div>
      
      {resultat !== 5 && <button onClick={jeu}>Play</button>}
      
      {resultat === 5 && <p>Bravo, vous avez trouvé la face cachée, c'est 3!</p>}
      {resultat === 5 && <button onClick={initializeGame}>Initialize</button>}
    </div>
  );
};

export default JeuDe;
