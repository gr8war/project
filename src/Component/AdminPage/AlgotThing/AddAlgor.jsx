import React, { useState } from 'react';
import axios from 'axios';

function AddAlgorithmForm() {
  const [algorithmData, setAlgorithmData] = useState({
    name: '',
    description: '',
    tag: '',
    rank: 0
  });

  const handleChange = (event) => {
    setAlgorithmData({ ...algorithmData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://your-api-url/algorithms', algorithmData);
      console.log('Algorithm added:', response.data);
      alert('Algorithm added successfully!');
      setAlgorithmData({ name: '', description: '', tag: '', rank: 0 });  // Reset form after successful submission
    } catch (error) {
      console.error('Failed to add algorithm:', error);
      alert('Failed to add algorithm.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:
        <input type="text" name="name" value={algorithmData.name} onChange={handleChange} />
      </label>
      <label>Description:
        <input type="text" name="description" value={algorithmData.description} onChange={handleChange} />
      </label>
      <label>Tag:
        <input type="text" name="tag" value={algorithmData.tag} onChange={handleChange} />
      </label>
      <label>Rank:
        <input type="number" name="rank" value={algorithmData.rank} onChange={handleChange} />
      </label>
      <button type="submit">Add Algorithm</button>
    </form>
  );
}

export default AddAlgorithmForm;
