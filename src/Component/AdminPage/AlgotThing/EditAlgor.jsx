import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditAlgorithmDescription() {
  const [tag, setTag] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch algorithm description when tag is provided
  useEffect(() => {
    if (tag !== '') {
      setLoading(true);
      axios.get(`https://your-api-url/algorithms/${tag}`)
        .then(response => {
          setDescription(response.data.description);
          setError('');
        })
        .catch(error => {
          setError('Algorithm not found or error fetching algorithm.');
          setDescription('');
        })
        .finally(() => setLoading(false));
    }
  }, [tag]);

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (tag && description) {
      try {
        await axios.put(`https://your-api-url/algorithms/${tag}`, { description });
        alert('Algorithm description updated successfully!');
      } catch (error) {
        alert('Failed to update algorithm description.');
        console.error('Error updating algorithm:', error);
      }
    } else {
      alert('Please provide both tag and description.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Algorithm Tag:
        <input type="text" value={tag} onChange={handleTagChange} />
      </label>
      <label>New Description:
        <textarea value={description} onChange={handleDescriptionChange} />
      </label>
      <button type="submit">Update Description</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </form>
  );
}

export default EditAlgorithmDescription;
