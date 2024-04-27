import React, { useState } from 'react';
import axios from 'axios';

function DeleteAlgorithmForm() {
  const [tag, setTag] = useState('');

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.delete(`https://your-api-url/algorithms/${tag}`);
      console.log('Algorithm deleted:', response.data);
      setTag('');  // Reset tag field
    } catch (error) {
      console.error('Failed to delete algorithm:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Algorithm Tag:
        <input type="text" value={tag} onChange={handleChange} />
      </label>
      <button type="submit">Delete Algorithm</button>
    </form>
  );
}

export default DeleteAlgorithmForm;
