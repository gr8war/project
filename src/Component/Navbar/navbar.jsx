import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css'; // Предполагается, что у вас есть файл стилей styles.css с необходимыми стилями
function Header({ jwt, login, logout }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Имитация получения JWT с сервера
    const fetchJwt = async () => {
      try {
        const response = await fetch('/api/auth/token');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJwt(data.token); // Сохраняем полученный JWT
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchJwt();
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
              
              <img id='image_icon' src = "..\\..\\src\\assets\\image.png" alt="Profile" />
              <i className="ri-user-line"></i>
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

export default Header;
