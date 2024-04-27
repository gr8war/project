import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate для редиректа
import './VerificationPage.css'; // Подключаем файл со стилями

function VerificationPage() {
    const [verificationCode, setVerificationCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [timer, setTimer] = useState(60); // Таймер для повторной отправки кода
    const navigate = useNavigate(); // Хук для навигации

    const handleInputChange = (e) => {
        setVerificationCode(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (verificationCode === '1234') {
            console.log('Verification successful!');
            setErrorMessage('');
            navigate('/password'); // Перенаправление на новую страницу после успешной верификации
        } else {
            console.log('Verification failed!');
            setErrorMessage('Invalid verification code. Please try again.');
        }
    };

    const handleResendCode = () => {
        console.log('Resending verification code...');
        setIsCodeSent(true);
        setTimer(60); // Сброс таймера на 60 секунд
        let interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer === 1) {
                    clearInterval(interval);
                    setIsCodeSent(false);
                    return 60;
                }
                return prevTimer - 1;
            });
        }, 1000);
    };

    return (
        <div className="verification-container">
            <div className="left-panel">
                <div className='logos_login'>
                    <a href="/" className="nav__logo">
                        <img id='image_icon' src="../../src/assets/image.png" alt="Logo" />
                        <p>AlgoRhythm</p>
                    </a>
                </div>
                <h1> Doğrulama Kodunu daxil edin</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="verificationCode" placeholder="Təsdiqləmə Kodu" value={verificationCode} onChange={handleInputChange} />
                    <button type="submit">Şifrəni dəyiş</button>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {!isCodeSent && <button type="button" onClick={handleResendCode}>Yenidə göndər</button>}
                    {isCodeSent && <p className="countdown-timer"> {timer}</p>}
                </form>
            </div>
            <div className="right-panel">
                <img src="https://sun9-78.userapi.com/impg/Sd9mw8NKK9Fu5F3o0Eylf1NKktEENp9YJlLJ1g/44_JqeG00B4.jpg?size=1024x1024&quality=95&sign=edd6f02939a3225436b22cb7ff26a23a&type=album" alt="Verification Visual" />
            </div>
        </div>
    );
}

export default VerificationPage;
