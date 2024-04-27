import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditAlgorithmForm({ algorithmTag }) {
  const [algorithmData, setAlgorithmData] = useState({
    name: '',
    description: '',
    tag: '',
    rank: 0
  });

  // Fetch existing algorithm data
  useEffect(() => {
    async function fetchAlgorithmData() {
      try {
        const response = await axios.get(`https://your-api-url/algorithms/${algorithmTag}`);
        setAlgorithmData(response.data);
      } catch (error) {
        console.error('Failed to fetch algorithm data:', error);
      }
    }

    fetchAlgorithmData();
  }, [algorithmTag]);

  const handleChange = (event) => {
    setAlgorithmData({ ...algorithmData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`https://your-api-url/algorithms/${algorithmTag}`, algorithmData);
      console.log('Algorithm updated:', response.data);
      alert('Algorithm updated successfully!');
    } catch (error) {
      console.error('Failed to update algorithm:', error);
      alert('Failed to update algorithm.');
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
      <button type="submit">Update Algorithm</button>
    </form>
  );
}

export default EditAlgorithmForm;
