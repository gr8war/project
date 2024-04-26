import React, { useState } from 'react';
import axios from 'axios'; // Убедитесь, что axios установлен

function DeleteUserForm() {
  const [email, setEmail] = useState('');

  // Обрабатываем изменение поля ввода
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  // Обрабатываем отправку формы
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email) {
      alert('Пожалуйста, введите электронную почту пользователя.');
      return;
    }
    try {
      const response = await axios.delete(`https://your-api-url/users/${email}`);
      console.log('User deleted:', response.data);
      alert('Пользователь удален успешно!');
      setEmail(''); // Очищаем поле после удаления
    } catch (error) {
      console.error('Failed to delete user:', error);
      alert('Ошибка при удалении пользователя. Проверьте логи.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Электронная почта"
        required
      />
      <button type="submit">Удалить пользователя</button>
    </form>
  );
}

export default DeleteUserForm;
