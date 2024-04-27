import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import HEADER from '../Navbar/navbar.jsx';
import './Profile.css';
import { TabTitle } from '../../Title.jsx';

const Profile = () => {
    const [items, setItems] = useState([]);
    const [imageUrl, setImageUrl] = useState('');
    const [isUserIsUser, setIsUserIsUser] = useState(true); // Используем useState для этой переменной

    const { id } = useParams(); // Получаем id из URL

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`) // Используем id в URL
        .then(response => response.json())
        .then(data => {
          setItems([data]); // Установим полученные данные в массив, если ожидается массив
          setImageUrl(data.imageURL);
          TabTitle(data.name); 
        });
    }, [id]); // id добавляем в зависимости useEffect, чтобы перезагрузить данные при изменении id

    const handleLogout = () => {
      setIsUserIsUser(false); // Обновляем состояние на false
    };
  

    return (
        <div>
            <HEADER/>
            <div className="content middle">
                <div className="spor">
                    <h1>{items.map(item => item.name)}</h1>
                </div> 
                <div className='algorbox'>
                    <div className="sled">
                        <div className='edit'>
                        {isUserIsUser && (
                                <div onClick={handleLogout} className="icon-container" style={{ cursor: 'pointer' }}>
                                    <i className="ri-logout-box-r-fill"></i>
                                </div>
                            )}
                            {items.map(item => (
                                <div key={item.id}>
                                    {isUserIsUser && (
                                        <a href={`/profile_change/${id}`}>
                                            <i className="ri-edit-2-fill"></i>
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="top-container">
                            <div className="left-block">
                                <img src={imageUrl || 'https://sun9-58.userapi.com/impg/ab5T4idhr0B5AWdXxxa4y5E52y-TQCZCfyQAUw/3w28Q9giHrg.jpg?size=400x400&quality=96&sign=c35888bdc0a89173caa4adb009d2f1ff&c_uniq_tag=Vjl9BcXEUFWGI8PMiqcrKunqn8_XpJVDG4FiotfXHJc&type=album'} alt="User" />
                            </div>
                            <div className="right-block">
                                {items.map(item => (
                                    <div key={item.id}>
                                        <h2>Email</h2>
                                        <p>{item.email}</p>
                                        <h2>Haqqında</h2>
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
