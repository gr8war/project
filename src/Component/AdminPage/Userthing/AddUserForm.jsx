import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditUserForm({ userId }) {
  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    about: ''
  });

  // Fetch existing user data
  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get(`https://your-api-url/users/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    }

    fetchUserData();
  }, [userId]);

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`https://your-api-url/users/${userId}`, userData);
      console.log('User updated:', response.data);
      alert('User updated successfully!');
    } catch (error) {
      console.error('Failed to update user:', error);
      alert('Failed to update user.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:
        <input type="text" name="name" value={userData.name} onChange={handleChange} />
      </label>
      <label>Surname:
        <input type="text" name="surname" value={userData.surname} onChange={handleChange} />
      </label>
      <label>Email:
        <input type="email" name="email" value={userData.email} onChange={handleChange} />
      </label>
      <label>Password:
        <input type="password" name="password" value={userData.password} onChange={handleChange} />
      </label>
      <label>About:
        <textarea name="about" value={userData.about} onChange={handleChange} />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
}

export default EditUserForm;
