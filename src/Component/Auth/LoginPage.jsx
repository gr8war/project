import React, { useState } from 'react';
import './LoginPage.css'; // Подключаем файл со стилями

function LoginPage() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logging in with:', loginData.email);
        // Здесь должен быть код для отправки данных на сервер и проверки аутентификации
    };

    return (
        <div className="login-container">
            <div className="left-panel">
                <a href="/" className="nav__logo">
                    <img id='image_icon' src="..\..\src\assets\image.png" alt="succer" />
                    <p>AlgoRhythm</p>
                </a>
                <h1>Daxil Ol</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleInputChange} />
                    <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleInputChange} />
                    <button type="submit" className='login-button'>Daxil Ol</button>
                </form>
            </div>
            <div className="right-panel">
                <img src="https://sun9-78.userapi.com/impg/Sd9mw8NKK9Fu5F3o0Eylf1NKktEENp9YJlLJ1g/44_JqeG00B4.jpg?size=1024x1024&quality=95&sign=edd6f02939a3225436b22cb7ff26a23a&type=album" alt="Login Visual" />
            </div>
        </div>
    );
}

export default LoginPage;