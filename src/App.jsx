import { Stack, MantineProvider } from "@mantine/core";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from "./pages/LoginPage/LoginPage"
import MainPage from "./pages/MainPage/MainPage"
import UserPage from "./pages/VotePage/VotePage"
import VotePage from "./pages/UserPage/UserPage"
import ChatPage from "./pages/ChatPage/ChatPage"
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import './App.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Here you could check for a token in localStorage or make an API call to verify the user session
    // For demonstration, let's assume we check if a "userToken" exists in localStorage
    const userToken = localStorage.getItem('userToken');
    setIsLoggedIn(!!userToken);
  }, []);

  return (
        <div className="Home">
        <Router>
          <Routes>
            <Route path="/" element={isLoggedIn ? <MainPage /> : <Navigate replace to="/LoginPage" />} />
            <Route path="/LoginPage" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/MainPage" element={isLoggedIn ? <UserPage /> : <Navigate replace to="/LoginPage" />} />
            <Route path="/VotePage" element={isLoggedIn ? <VotePage /> : <Navigate replace to="/LoginPage" />} />
          </Routes>
        </Router>

          <div className="bottom-sidebar">
              <button className="nav-button1" onClick={<MainPage />}>Home</button>
              <button className="nav-button2" onClick={<ChatPage/>}>Chat</button>
              <button className="nav-button3" onClick={<CommunityPage/>}>Community</button>
              <button className="nav-button4" onClick={<VotePage/>}>Vote</button>
          </div>
        </div>
  );
}

export default App;
