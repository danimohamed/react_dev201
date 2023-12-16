import React, { useEffect, useState } from 'react';
import Select from 'react-select';

export function G() {
  const [code_materiel, setcode_materiel] = useState('');
  const [date_debut, setdate_debut] = useState('');
  const [marque, setMarque] = useState('');
  const [categorie, setCategorie] = useState('');
  const [showRecap, setShowRecap] = useState(false);

  const options = [
    { value: 'HP', label: 'HP' },
    { value: 'Dell', label: 'Dell' },
    { value: 'Huawei', label: 'Huawei' },
    { value: 'Asus', label: 'Asus' },
  ];

  const handleMarqueChange = (selectedOption) => {
    setMarque(selectedOption.value);
  };

  const handleConfirmerClick = () => {
    setShowRecap(true);
  };



  return (
    <div>
      <h1>gestion Materiel</h1>
      <label>code materiel:</label>{' '}
      <input
        type="text"
        name="code_materiel"
        value={code_materiel}
        onChange={(e) => setcode_materiel(e.target.value)}
      />
      <label>Marque:</label>
      <Select options={options} value={{ label: marque, value: marque }} onChange={handleMarqueChange} />
      <label>date debut:</label>{' '}
      <input type="date" name="date_debut" value={date_debut} onChange={(e) => setdate_debut(e.target.value)} />
      <label>categorie:</label>
      <input type="text" name="categorie" value={categorie} onChange={(e) => setCategorie(e.target.value)} />
      <button onClick={handleConfirmerClick}>confirmer</button>

      {showRecap && (
        <div>
          <h2>Récapitulatif des informations :</h2>

          <ul>
            <li>
              Code Materiel: {code_materiel}
            </li>
            <li>
              Marque: {marque}
            </li>
            <li>Date Debut: {date_debut}</li>
            <li>Categorie: {categorie}</li>
          </ul>

        </div>
      )}
    </div>
  );
}

export default G;