import React, { useState } from 'react';
import axios from 'axios';

function DeleteDiscussionTopicForm() {
  const [topicId, setTopicId] = useState('');

  const handleChange = (event) => {
    setTopicId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!topicId) {
      alert('Please enter a topic ID.');
      return;
    }
    try {
      const response = await axios.delete(`https://your-api-url/discussion-topics/${topicId}`);
      console.log('Discussion topic deleted:', response.data);
      alert('Discussion topic deleted successfully!');
      setTopicId('');  // Reset topic ID field after successful deletion
    } catch (error) {
      console.error('Failed to delete discussion topic:', error);
      alert('Failed to delete discussion topic. Please check the topic ID and try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Discussion Topic ID:
        <input type="text" value={topicId} onChange={handleChange} />
      </label>
      <button type="submit">Delete Topic</button>
    </form>
  );
}

export default DeleteDiscussionTopicForm;
