import React, { useState } from 'react';
import axios from 'axios'; // Убедитесь, что axios установлен

function AddUserForm() {
  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    email: '',
    password: ''
  });

  // Обрабатываем изменения в полях формы
  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  // Обрабатываем отправку формы
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://your-api-url/users', userData);
      console.log('User added:', response.data);
      // Очистка формы или уведомление об успехе
      setUserData({ name: '', surname: '', email: '', password: '' });
    } catch (error) {
      console.error('Failed to add user:', error);
      // Обработка ошибок или уведомление пользователя
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        placeholder="Имя"
        required
      />
      <input
        type="text"
        name="surname"
        value={userData.surname}
        onChange={handleChange}
        placeholder="Фамилия"
        required
      />
      <input
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        placeholder="Электронная почта"
        required
      />
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
        placeholder="Пароль"
        required
      />
      <button type="submit">Добавить пользователя</button>
    </form>
  );
}

export default AddUserForm;
