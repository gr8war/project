import React from 'react';

function LanguageSelector({ languages, onChange }) {
  return (
    <select onChange={onChange}>
      {languages.map(language => (
        <option key={language} value={language}>{language}</option>
      ))}
    </select>
  );
}

export default LanguageSelector;
