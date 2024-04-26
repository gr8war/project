import React, { useState, useEffect } from 'react';
import './ContestPage.css';
import HEADER from '../Navbar/navbar.jsx';

const OyunPage = () => {
  const [levels, setLevels] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')  // Путь к вашему JSON файлу
      .then(response => response.json())
      .then(data => setLevels(data))
      .catch(error => console.error('Ошибка при загрузке данных:', error));

    // Эмуляция проверки статуса пользователя
    setUserLoggedIn(true); // Измените на true для тестирования залогиненного пользователя
  }, []);

  const getConnectorColor = (left, right) => {
    if (!userLoggedIn) return 'white';
    return left.unlocked && right.unlocked ? 'green' : 'red';
  };

  return (
    <div>
      <HEADER/>
      <div className="oyun-container">
        <div className='spor'>
          <h1>Oyun</h1>
          <p>Keçid Etmək üçün giriş edin!</p>
        </div>
        <div className="levels-grid">
          {levels.map((level, index) => (
            <React.Fragment key={level.id}>
              <div className={`level-cell ${level.unlocked && userLoggedIn ? 'unlocked' : 'locked'}`}>
                <p className='oyun_contain'>{level.title}</p>
                {userLoggedIn ? (
                  level.id ? (
                    <a href={`/algor/${level.id}`}>

                    <button className='kecit_button'>Keçid Et</button></a>
                  ) : (
                    <i className="ri-git-repository-private-fill"></i>
                  )
                ) : (
                    <i className="ri-git-repository-private-fill"></i>
                )}
              </div>
              {index < levels.length - 1 && (
                <i className={`ri-netease-cloud-music-line connector ${getConnectorColor(level, levels[index + 1])}`} style={{ fontSize: '40px' }}></i>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OyunPage;
