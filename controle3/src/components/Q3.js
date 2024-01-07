import React from 'react';

const Q3 = ({ stagiaires }) => {
  return (
    <div>
      {stagiaires.map((stagiaire) => (
        <div key={stagiaire.code} className="card">
          <p>Nom: {stagiaire.nom}</p>
          <p>Prénom: {stagiaire.prenom}</p>
          <p>Option: {stagiaire.option}</p>
        </div>
      ))}
    </div>
  );
};

export default Q3;
