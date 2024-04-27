import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from './Component/Auth/SignUpPage';
import LoginPage from './Component/Auth/LoginPage';
import HomePage from './Component/Home/HomePage';
import VerificationPage from './Component/Auth/VerificationPage';
import VerifPage from './Component/Auth/Verif_page';
import ContestPage from './Component/ContestPage/ContestPage';
import AlgorithmsList from './Component/AlgoRhythmsPage/AlgoRhythmsPage';
import IcmaPage from './Component/Icmapage/IcmaPage';
import DiscussionPage from './Component/Icmapage/DiscussionPage';
import AdminPage from './Component/AdminPage/AdminPage.jsx';
import ContactPage from './Component/ContactPage/ContactPage.jsx';
import LevelTest from './Component/AlgoRhythmsPage/AlgorTest/LevelTest.jsx';
import AlgorhythmsLevels from './Component/AlgoRhythmsPage/AlgorythmaPage/AlgorhytmsLevels.jsx';
import Profile from './Component/Profile/Profile.jsx';
import Profile_change from './Component/Profile/Profile_change.jsx';
import PasswordChange from './Component/Auth/PasswordChange.jsx';
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially user is not logged in

  useEffect(() => {
    fetch('/api/isLoggedIn')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setIsLoggedIn(data.isLoggedIn); // Update the login state based on response
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <Router>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile_change/:id" element={<Profile_change />} />
        <Route path="/sign_up" element={<SignUpPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/password" element={<PasswordChange />} />
        <Route path="/verify" element={<VerificationPage />} />
        <Route path="/verify_mail" element={<VerifPage />} />
        <Route path="/algor_desk/:id" element={<AlgorhythmsLevels />} />
        <Route path="/algor/:id" element={<LevelTest />} />
        <Route path="/algor" element={<AlgorithmsList />} />
        <Route path="/discuss" element={<IcmaPage />} />
        <Route path="/discussion/:id" element={<DiscussionPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contest" element={<ContestPage isLoggedIn={isLoggedIn} unlockNextLevel={(id) => console.log('Unlock level', id)} />} />
        {/* Другие маршруты */}
      </Routes>
    </Router>
  );
}

export default App;
