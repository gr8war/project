import React, { useState } from 'react';
import LanguageSelector from './LanguageSelector';
import './Level.css'
import HEADER from '../../Navbar/navbar.jsx';

function LevelTest() {
  const [language, setLanguage] = useState('JavaScript');
  const [response, setResponse] = useState('');
  const [code, setCode] = useState('');

  const languages = ['JavaScript', 'Python', 'Java']; // Add more languages as needed

  const handleLanguageChange = event => {
    setLanguage(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const apiResponse = await fetch('https://api.yourserver.com/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code, language })
    });
    const responseData = await apiResponse.json();
    setResponse(responseData.result);
  };

  return (
    <div>
      <HEADER/>
      

    <div className="contact-page">
      <div className="left">
      <div className='spor'>
      <h1>AlgoRhythm‘ə Xoş Gəlmisiniz!</h1>
      
        <p className='oso'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam placeat blanditiis doloribus! Error unde doloribus fuga, explicabo provident animi architecto voluptate rerum, impedit est tempore quasi ipsa consequatur distinctio nostrum.</p>
      </div></div>
      <div className="right">
        <div>
      
          <form onSubmit={handleSubmit}>
          <p>Answer:</p>
            <textarea 
              className='cheese'
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter your code here..."
            />
            <LanguageSelector languages={languages} onChange={handleLanguageChange} />
            <button type="submit">Send Code</button>
          </form>
        </div>
        <div>
          <p>Answer:</p>
          <code className='bazinga'>{response}</code>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LevelTest;


