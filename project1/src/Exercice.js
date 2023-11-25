import React, { useState } from "react";
export function Greeting() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");

  const display = () => {
    const greeting = `Bonjour ${nom} ${prenom}`;
    document.getElementById("resultat").innerHTML = greeting;
  };

  return (
    <div>
      <h2>Exercice 1</h2>
      <label>Entrez votre nom</label>
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      /><br />
      <label>Entrez votre prenom</label>
      <input
        type="text"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
      /><br />
      <button onClick={display}>Valider</button>
      <span id="resultat"></span>
    </div>
  );
}
