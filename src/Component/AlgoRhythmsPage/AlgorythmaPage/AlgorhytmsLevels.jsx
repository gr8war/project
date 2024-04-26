import React, { useState, useEffect } from 'react';
import '../AlgoRhythmsPage.css';
import HEADER from '../../Navbar/navbar.jsx';

import { useParams } from 'react-router-dom';
import axios from 'axios';


function AlgorhythmsLevels() {
    const [items, setItems] = useState([]);

const { id } = useParams(); // Получаем id из URL

useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) // Используем id в URL
    .then(response => response.json())
    .then(data => {
      setItems([data]); // Установим полученные данные в массив, если ожидается массив
    });
}, [id]); // id добавляем в зависимости useEffect, чтобы перезагрузить данные при изменении id
  return (
    <div>
        <HEADER/>
        <div>
        <div className="content middle">
        <div className="spor">
            <h1>{items.map(item => (
              
                item.id
            ))}</h1>
          </div>
        <div className="spor">
            <h3>Levels</h3>
          </div>
          <div className='algorbox'>
            <div className='koffe'>
          {items.map(item => (
             
                  <p>{item.body}</p>
               
            ))}
            <img  className="image_algor" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gBfdM0ez6UcYVqQY2T6RJXbA74qGTudHKeZSUQ9zMg&s" alt="s" />
          </div>
          </div>
          
          </div>
        <div className="content middle">
        <div className="spor">
            <h3>Levels</h3>
          </div>
          <div className='algorbox'>
  {items.length > null ? (
    items.map(item => (
      <a href={`/algor/${item.id}`} key={item.id}>
        <div className="algoritem">
          <p>{item.title}</p>
          <i className="ri-arrow-right-s-fill"></i>
        </div>
      </a>
    ))
  ) : (
    <div className="empty-message">
      <p>Sorry you don't have access for this</p>
    </div>
  )}
</div>
  </div>
    </div>
    </div>
  );
}

export default AlgorhythmsLevels;
