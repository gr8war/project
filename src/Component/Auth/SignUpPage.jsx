import React, { useState } from 'react';
import './SignUpPage.css';  // Стилизация будет описана отдельно

function SignUpPage() {
    const [userData, setUserData] = useState({
        fullname: '',
        email: '',
        password: ''
    });
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Sending verification code to:', userData.email);
        // Здесь должен быть код для отправки данных на сервер
    };

    const handleLoginRedirect = () => {
        // Redirect to login page
        console.log('Redirecting to login page...');
    };

    return (


        <div className="signup-container">
            <div className="left-panel">

            <div className='logos_login'>
            <a href="/" className="nav__logo">
                    <img id='image_icon' src="..\..\src\assets\image.png" alt="succer" />
                    <p>AlgoRhythm</p>
                </a>
            </div>
                <h1>Hesab Yarat</h1>
                <form onSubmit={handleSubmit}>
                    <input className='time_in_a_bottle' type="text" name="Ad" placeholder="Ad" value={userData.name} onChange={handleInputChange} />
                    <input  className='time_in_a_bottle'type="text" name="Soyad" placeholder="Soyad" value={userData.surname} onChange={handleInputChange} />
                    <input className='time_in_a_bottle' type="email" name="email" placeholder="Email" value={userData.email} onChange={handleInputChange} />
                    <input className='time_in_a_bottle' type={passwordVisible ? 'text' : 'password'} name="password" placeholder="Şifrə" value={userData.password} onChange={handleInputChange} />
                    <button type="button" onClick={togglePasswordVisibility}>Şifrəni {passwordVisible ? 'Gizlə' : 'Göstər'} </button>
                    <div class="container_login">
                                <button class="signup-button">Qeydiyyatdan Keç</button>
                                <div class="login-section">
                                 <span class="login-text"> <a href='/login' className='asa'>Hesabın Var?  </a></span>
                                 <button class="login-button">Daxil Ol</button>
                    </div>
            </div>
                </form>
            </div>
            <div className="right-panel">
                <img src="https://sun9-78.userapi.com/impg/Sd9mw8NKK9Fu5F3o0Eylf1NKktEENp9YJlLJ1g/44_JqeG00B4.jpg?size=1024x1024&quality=95&sign=edd6f02939a3225436b22cb7ff26a23a&type=album" alt="Sign Up Visual" />
            </div>
        </div>
    );
}

export default SignUpPage;
