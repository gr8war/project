import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'; // Предполагается, что у вас есть файл стилей styles.css с необходимыми стилями
function Header({ jwt, login, logout }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [userImage, setUserImage] = useState(null); // Добавлено состояние для изображения пользователя

  useEffect(() => {
    // Здесь имитация получения JWT с сервера
    const fetchJwt = async () => {
      // ... ваш существующий код
    };

    // Вызов fetchJwt
    fetchJwt();

    // Fetch для получения изображения пользователя
    const userId = '2'; // Пример ID пользователя, подставьте актуальное значение
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((userData) => {
        // Предположим, что URL изображения пользователя находится в свойстве 'imageUrl' объекта userData
        setUserImage(userData.imageUrl);
      })
      .catch((error) => {
        console.error('Ошибка при получении изображения пользователя:', error);
      });
  }, []);
  
  const image = "..\\..\\src\\assets\\image.png"
  

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          <img id='image_icon' src="..\\..\\src\\assets\\image.png" alt="Logo" />
          <p>AlgoRhythm</p>
        </a>

        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/contest" className="nav__link">Oyun</a>
            </li>
            <li className="nav__item">
              <a href="/algor" className="nav__link">Tədris Programı</a>
            </li>
            <li className="nav__item">
              <a href="/discuss" className="nav__link">İcma</a>
            </li>
            <li className="nav__item">
              <a href="/contact" className="nav__link">Əlaqə</a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close" onClick={() => setMenuOpen(false)}>
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__actions">
          {image ? (
            <a href="/profile/2" className="nav__link">
            <div>
              
              <img id='image_icon' src =  'https://sun9-58.userapi.com/impg/ab5T4idhr0B5AWdXxxa4y5E52y-TQCZCfyQAUw/3w28Q9giHrg.jpg?size=400x400&quality=96&sign=c35888bdc0a89173caa4adb009d2f1ff&c_uniq_tag=Vjl9BcXEUFWGI8PMiqcrKunqn8_XpJVDG4FiotfXHJc&type=album' alt="Profile" />
            </div></a>
          ) : (
            
            <a href="/login" className="nav__link">
              
            <div className='button___login'>Qeydiyyat/Giriş<i className="ri-arrow-right-line"></i></div>
          </a>
            
          )}
          <div className="nav__toggle" id="nav-toggle" onClick={() => setMenuOpen(!isMenuOpen)}>
            <i className="ri-menu-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
//<i className="ri-user-line"></i> 
export default Header;
