import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUpPage from './Component/Auth/SignUpPage';
import LoginPage from './Component/Auth/LoginPage';
import HomePage from './Component/Home/HomePage';
import VerificationPage from './Component/Auth/VerificationPage';
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
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile_change/:id" component={Profile_change} />
        <Route path="/sign_up" component={SignUpPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/verify" component={VerificationPage} />
        <Route path="/algor_desk/:id" component={AlgorhythmsLevels} />
        <Route path="/algor/:id" component={LevelTest} />
        <Route path="/algor" component={AlgorithmsList} />
        <Route path="/discuss" exact  component={IcmaPage} />
        <Route path="/discussion/:id" component={DiscussionPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/contest">
            <ContestPage isLoggedIn={isLoggedIn} unlockNextLevel={(id) => console.log('Unlock level', id)} />
          </Route>
        {/* Другие маршруты */}
      </Switch>
    </Router>
  );
}

export default App;
