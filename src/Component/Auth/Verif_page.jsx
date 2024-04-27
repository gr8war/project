import React, { useState } from 'react';
import './VerificationPage.css'; // Подключаем файл со стилями

function VerifPage() {
    const [verificationCode, setVerificationCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isCodeSent, setIsCodeSent] = useState(false);

    const handleInputChange = (e) => {
        setVerificationCode(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь должна быть проверка верификационного кода и его отправка на сервер
        if (verificationCode === '1234') { // Здесь вы можете реализовать проверку настоящего кода
            console.log('Verification successful!');
            setErrorMessage('');
            // Здесь вы можете выполнить редирект или другие действия после успешной верификации
        } else {
            console.log('Verification failed!');
            setErrorMessage('Invalid verification code. Please try again.');
        }
    };


    return (
        <div className="verification-container">
            <div className="left-panel">
            <div className='logos_login'>
            <a href="/" className="nav__logo">
                    <img id='image_icon' src="..\..\src\assets\image.png" alt="succer" />
                    <p>AlgoRhythm</p>
                </a>
            </div>
                <h1>Email daxil edin</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="verificationCode" placeholder="Email" value={verificationCode} onChange={handleInputChange} />
                    <button type="submit"><a href='/login'>Kod göndər</a></button>
                </form>
                
            </div>
            <div className="right-panel">
                <img src="https://sun9-78.userapi.com/impg/Sd9mw8NKK9Fu5F3o0Eylf1NKktEENp9YJlLJ1g/44_JqeG00B4.jpg?size=1024x1024&quality=95&sign=edd6f02939a3225436b22cb7ff26a23a&type=album" alt="Verification Visual" />
            </div>
        </div>
    );
}

export default VerifPage;
