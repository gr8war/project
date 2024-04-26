import React, { useState } from 'react';

function EditUserForm() {
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [userDetails, setUserDetails] = useState({
    name: '',
    surname: '',
    password: ''
  });
  
useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`) // Используем id в URL
      .then(response => response.json())
      .then(data => {
        setItems([data]); // Установим полученные данные в массив, если ожидается массив
        setImageUrl(data.imageURL);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit these details to the backend
    console.log('User updated:', { email, userDetails });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Name:</label>
      <input
        type="text"
        value={userDetails.name}
        onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
        required
      />
      <label>Surname:</label>
      <input
        type="text"
        value={userDetails.surname}
        onChange={(e) => setUserDetails({...userDetails, surname: e.target.value})}
        required
      />
      <label>Password:</label>
      <input
        type="password"
        value={userDetails.password}
        onChange={(e) => setUserDetails({...userDetails, password: e.target.value})}
        required
      />
      <button type="submit">Update User</button>
    </form>
  );
}

export default EditUserForm;
