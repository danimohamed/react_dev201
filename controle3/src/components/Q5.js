import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ajouterModule } from 'config/actions.js';

const Q5 = () => {
  const dispatch = useDispatch();

  const initialState = {
    code: 0,
    nom: '',
    prenom: '',
    filiere: '',
    option: '',
    modules: [],
  };

  const [nouveauStagiaire, setNouveauStagiaire] = useState(initialState);

  const handleAjouterStagiaire = () => {
    dispatch(ajouterModule(nouveauStagiaire));
    setNouveauStagiaire(initialState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNouveauStagiaire((prevStagiaire) => ({ ...prevStagiaire, [name]: value }));
  };

  return (
    <div>
      <div>
        <label>Nom:</label>
        <input type="text" name="nom" value={nouveauStagiaire.nom} onChange={handleInputChange} />
      </div>
      <div>
        <label>Prenom:</label>
        <input type="text" name="prenom" value={nouveauStagiaire.prenom} onChange={handleInputChange} />
      </div>
      <div>
        <label>Filiere:</label>
        <input type="text" name="filiere" value={nouveauStagiaire.filiere} onChange={handleInputChange} />
      </div>
      <div>
        <label>Option:</label>
        <input type="text" name="option" value={nouveauStagiaire.option} onChange={handleInputChange} />
      </div>

      <button onClick={handleAjouterStagiaire}>Ajouter Stagiaire</button>
    </div>
  );
};

export default Q5;
