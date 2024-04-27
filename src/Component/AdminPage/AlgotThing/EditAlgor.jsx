import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditAlgorithm({ algorithmTag }) {
  const [algorithmData, setAlgorithmData] = useState({
    name: '',
    description: '',
    rank: 0,
    tag: algorithmTag  // Assuming tag is passed to the component for fetching the specific algorithm
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch algorithm data when tag is provided or changed
  useEffect(() => {
    if (algorithmTag) {
      setIsLoading(true);
      axios.get(`https://your-api-url/algorithms/${algorithmTag}`)
        .then(response => {
          setAlgorithmData({
            name: response.data.name,
            description: response.data.description,
            rank: response.data.rank,
            tag: response.data.tag
          });
          setError('');
        })
        .catch(error => {
          setError('Failed to fetch algorithm data. Please check the tag and try again.');
          console.error('Fetch error:', error);
        })
        .finally(() => setIsLoading(false));
    }
  }, [algorithmTag]);

  const handleChange = (event) => {
    setAlgorithmData({ ...algorithmData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`https://your-api-url/algorithms/${algorithmTag}`, algorithmData);
      alert('Algorithm updated successfully!');
    } catch (error) {
      console.error('Error updating algorithm:', error);
      alert('Failed to update algorithm.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      {isLoading ? <p>Loading...</p> : (
        <>
          <label>Name:
            <input type="text" name="name" value={algorithmData.name} onChange={handleChange} />
          </label>
          <label>Description:
            <textarea name="description" value={algorithmData.description} onChange={handleChange} />
          </label>
          <label>Rank:
            <input type="number" name="rank" value={algorithmData.rank} onChange={handleChange} />
          </label>
          <label>Tag:
            <input type="text" name="tag" value={algorithmData.tag} onChange={handleChange}  />
          </label>
          <button type="submit">Update Algorithm</button>
        </>
      )}
    </form>
  );
}

export default EditAlgorithm;
