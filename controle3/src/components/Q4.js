import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { modifierOption } from 'config/actions.js';

const Q4 = () => {
  const dispatch = useDispatch();
  const [stagiaireCode, setStagiaireCode] = useState('');
  const [nouvelleOption, setNouvelleOption] = useState('');

  const handleModifierOption = () => {
    dispatch(modifierOption(stagiaireCode, nouvelleOption));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Code du stagiaire"
        value={stagiaireCode}
        onChange={(e) => setStagiaireCode(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nouvelle option"
        value={nouvelleOption}
        onChange={(e) => setNouvelleOption(e.target.value)}
      />
      <button onClick={handleModifierOption}>Modifier Option</button>
    </div>
  );
};

export default Q4;
