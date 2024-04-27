import React, { useState } from 'react';
import './VerificationPage.css'; // Подключаем файл со стилями

function PasswordChange() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Şifrələr uyğun gəlmir. Yenidən cəhd edin.');
            return;
        }
        // Serverə məlumat göndərilir
        fetch('/api/change-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password: password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log('Şifrə uğurla dəyişdirildi');
                // Parol uğurla dəyişdirildikdən sonra həyata keçiriləcək əməliyyatlar
            } else {
                setErrorMessage(data.message || 'Parolu dəyişərkən xəta baş verdi');
            }
        })
        .catch(error => {
            console.error('Parolu dəyişdirmək xətası:', error);
            setErrorMessage('Parolu dəyişdirmək zamanı xəta baş verdi');
        });
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
                <h1>Yeni şifrə daxil edin</h1>
                <form onSubmit={handleSubmit}>
                    <input type="password" name="password" placeholder="Yeni şifrə:" value={password} onChange={handlePasswordChange} />
                    <input type="password" name="confirmPassword" placeholder="Şifrəni təsdiqləyin:" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    <button type="submit"><a href='/'>Şifrəni dəyiş</a></button>
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            <div className="right-panel">
                <img src="https://sun9-78.userapi.com/impg/Sd9mw8NKK9Fu5F3o0Eylf1NKktEENp9YJlLJ1g/44_JqeG00B4.jpg?size=1024x1024&quality=95&sign=edd6f02939a3225436b22cb7ff26a23a&type=album" alt="Təsdiqləmə Görsəli" />
            </div>
        </div>
    );
}

export default PasswordChange;
