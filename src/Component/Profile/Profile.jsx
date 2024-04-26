
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HEADER from '../Navbar/navbar.jsx';
import './Profile.css'

const Profile = () => {

    

    const [items, setItems] = useState([]);

const { id } = useParams(); // Получаем id из URL
const { userId } = true;

useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`) // Используем id в URL
    .then(response => response.json())
    .then(data => {
      setItems([data]); // Установим полученные данные в массив, если ожидается массив
    });
}, [id]); // id добавляем в зависимости useEffect, чтобы перезагрузить данные при изменении id

  return (
    <div>
         <HEADER/>
        <div className="content middle">
        <div className="spor">
            <h1>{items.map(item => (
              
              item.name
          ))}</h1>
          
          </div> 
          
          <div className='algorbox'>
            
          <div className="sled">
            <div className='edit'>
            {items.map(item => (
            <div>
            {true == true && (
                <a href={`/profile_change/${id}`} className="icon-container">
                    <i className="ri-edit-2-fill"></i>
                </a>
            )}
            </div>
             
          
       ))}
            </div>
      <div className="top-container">
      <div className="left-block">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlFQvtgrEvsVIr7uTHXd_Xw4iXbWbIXGNeHKAt-xYWdQ&s" alt="aaa" />
        </div>
      <div className="right-block">
      {items.map(item => (
            <div>
            <h2 >Email</h2>
            <p>{item.email}</p>
            <h2>About</h2>
            <p>{item.username}</p>
            </div>
             
          
       ))}
       </div>
      </div>
      <div className="bottom-container">
      <div class="box_info">{items.map(item => (item.name))}</div>
      <div class="box_info">{items.map(item => (item.name))}</div>
      <div class="box_info">{items.map(item => (item.name))}</div>
      <div class="box_info">{items.map(item => (item.name))}</div>
      </div>
    </div>
           
          
            </div>
        </div>
    </div>
  );
};

export default Profile;