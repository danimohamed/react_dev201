import React, { useState } from 'react';

const Q6 = ({ options, handleFiltrerParOption }) => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div>
      <select onChange={(e) => setSelectedOption(e.target.value)}>
        <option value="">Sélectionnez une option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button onClick={() => handleFiltrerParOption(selectedOption)}>Filtrer par Option</button>
    </div>
  );
};

export default Q6;
