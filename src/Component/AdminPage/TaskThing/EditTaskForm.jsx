import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditTaskForm({ taskId }) {
  const [taskData, setTaskData] = useState({
    taskDescription: '',
    taskChecker: '',
    algorithmTag: ''  // Assuming task has an associated algorithm tag to update if needed
  });

  // Fetch existing task data
  useEffect(() => {
    async function fetchTaskData() {
      try {
        const response = await axios.get(`https://your-api-url/tasks/${taskId}`);
        setTaskData({
          taskDescription: response.data.description,
          taskChecker: response.data.checker,
          algorithmTag: response.data.algorithmTag  // Assuming API response includes this field
        });
      } catch (error) {
        console.error('Failed to fetch task data:', error);
      }
    }

    fetchTaskData();
  }, [taskId]);

  const handleChange = (event) => {
    setTaskData({ ...taskData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`https://your-api-url/tasks/${taskId}`, {
        description: taskData.taskDescription,
        checker: taskData.taskChecker,
        algorithmTag: taskData.algorithmTag
      });
      console.log('Task updated:', response.data);
      alert('Task updated successfully!');
    } catch (error) {
      console.error('Failed to update task:', error);
      alert('Failed to update task.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Task Description:
        <textarea name="taskDescription" value={taskData.taskDescription} onChange={handleChange} />
      </label>
      <label>Task Checker:
        <textarea name="taskChecker" value={taskData.taskChecker} onChange={handleChange} />
      </label>
      <label>Algorithm Tag:
        <input type="text" name="algorithmTag" value={taskData.algorithmTag} onChange={handleChange} />
      </label>
      <button type="submit">Update Task</button>
    </form>
  );
}

export default EditTaskForm;
