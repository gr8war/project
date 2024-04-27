import React, { useState, useEffect } from 'react';
import LanguageSelector from './LanguageSelector';
import './Level.css';
import HEADER from '../../Navbar/navbar.jsx';
import { TabTitle } from '../../../Title.jsx';

function LevelTest({ id }) { // Verify `id` is being passed correctly.
  const [language, setLanguage] = useState('JavaScript');
  const [response, setResponse] = useState('');
  const [code, setCode] = useState('');

  const languages = ['JavaScript', 'Python', 'Java'];

  const handleLanguageChange = event => {
    setLanguage(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('Submitting code:', code, 'Language:', language); // Log the submission details
    try {
      const apiResponse = await fetch('https://api.yourserver.com/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code, language })
      });
      if (!apiResponse.ok) throw new Error(`HTTP status ${apiResponse.status}`);
      const responseData = await apiResponse.json();
      setResponse(responseData.result);
    } catch (error) {
      console.error('Failed to fetch: ', error);
      setResponse(`Error: ${error.message}`);
    }
  };
  
  useEffect(() => {
    console.log('Fetching post with ID:', id); // Confirm `id` is logged
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP status ${response.status}`);
        return response.json();
      })
      .then(data => {
        console.log('Post title:', data.title); // Confirm title is fetched
        TabTitle(data.title);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        TabTitle('Tapşırıq');
      });
  }, [id]);

  return (
    <div>
      <HEADER/>
      <div className="contact-page">
        <div className="left">
          <div className='spor'>
            <h1>AlgoRhythm'ə xoş gəlmisiniz!</h1>
            <p className='oso'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
        <div className="right">
          <div>
            <form onSubmit={handleSubmit}>
              <p>Giriş verilənləri:</p>
              <textarea 
                className='cheese'
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Kodumu daxil edin..."
              />
              <LanguageSelector languages={languages} onChange={handleLanguageChange} />
              <button type="submit">Göndər</button>
            </form>
          </div>
          <div>
            <p>Nəticə:</p>
            <code className='bazinga'>{response}</code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelTest;
