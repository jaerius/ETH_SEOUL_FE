
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from "./pages/LoginPage/LoginPage"
import MainPage from "./pages/MainPage/MainPage"
import UserPage from "./pages/UserPage/UserPage"
import VotePage from "./pages/VotePage/VotePage"
import ChatPage from "./pages/ChatPage/ChatPage"
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import ArtistMainPage from './pages/ArtistMainPage/ArtistMainPage';
import Sidebar from "./Layout/Sidebar"
import './App.css';
import RegisterPage from "./pages/LoginPage/RegisterPage";
import { MantineProvider } from '@mantine/core';



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    // Here you could check for a token in localStorage or make an API call to verify the user session
    // For demonstration, let's assume we check if a "userToken" exists in localStorage
    const userToken = localStorage.getItem('userToken');
    //setIsLoggedIn(!!userToken);
  }, []);

  return (
      <MantineProvider>
        <div className="Home">
        <Router>
          <Routes>
            <Route path="/" element={isLoggedIn ? <MainPage /> : <Navigate replace to="/LoginPage" />} />
            <Route path="/LoginPage" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/RegisterPage" element={<RegisterPage/>}/>
            <Route path="/CommunityPage" element={<CommunityPage/>}/>
            <Route path="/MainPage" element={isLoggedIn ? <UserPage /> : <Navigate replace to="/LoginPage" />} />
            <Route path="/VotePage" element={<VotePage/>}/>
            <Route path="/ChatPage" element={<ChatPage/>}/>
            <Route path="/ArtistMainPage" element={<ArtistMainPage/>}/>
          </Routes>
        </Router>

       {/*<Sidebar/> */}
       
       {/*<div className="bottom-sidebar">
              <button className="nav-button1" onClick={<MainPage />}>Home</button>
              <button className="nav-button2" onClick={<ChatPage/>}>Chat</button>
              <button className="nav-button3" onClick={<CommunityPage/>}>Community</button>
              <button className="nav-button4" onClick={<VotePage/>}>Vote</button>
          </div>
       */}
        </div>
      </MantineProvider>
  );
}

export default App;
