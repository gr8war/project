import React, { useState } from 'react';
import axios from 'axios';

function AddAlgorithmForm() {
  const [algorithmData, setAlgorithmData] = useState({
    name: '',
    description: '',
    tag: '',
    rank: 0,
    taskDescription: '',
    taskChecker: ''  // Код или логика проверки задачи
  });

  const handleChange = (event) => {
    setAlgorithmData({ ...algorithmData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Подготовка данных алгоритма и задачи
      const postData = {
        name: algorithmData.name,
        description: algorithmData.description,
        tag: algorithmData.tag,
        rank: algorithmData.rank,
        tasks: [{
          description: algorithmData.taskDescription,
          checker: algorithmData.taskChecker
        }]
      };
      const response = await axios.post('https://your-api-url/algorithms', postData);
      console.log('Algorithm added:', response.data);
      setAlgorithmData({ name: '', description: '', tag: '', rank: 0, taskDescription: '', taskChecker: '' });
    } catch (error) {
      console.error('Failed to add algorithm:', error);
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
      <label>Task Description:
        <textarea name="taskDescription" value={algorithmData.taskDescription} onChange={handleChange} />
      </label>
      <label>Task Checker:
        <textarea name="taskChecker" value={algorithmData.taskChecker} onChange={handleChange} />
      </label>
      <button type="submit">Add Algorithm</button>
    </form>
  );
}

export default AddAlgorithmForm;
