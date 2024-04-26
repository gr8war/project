import React, { useState, useEffect } from 'react';
import Header from '../Navbar/navbar.jsx';
import './AlgoRhythmsPage.css';

function AlgoRhythmsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')  // URL вашего API
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Ошибка загрузки данных:', error));
  }, []);

  return (
    <div>
      <Header />
      <div className="content middle">
        <div className="mg">
          <div className="spor">
            <h1>Tədris Programı</h1>
          </div>
          <div className='algorbox'>
            {items.map(item => (
              <a href={`/algor_desk/${item.id}`} key={item.id}>
                <div className="algoritem">
                  <p>{item.title}</p>
                  <i className="ri-arrow-right-s-fill"></i>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlgoRhythmsPage;
