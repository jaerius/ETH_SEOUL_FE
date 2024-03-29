import React from 'react';
import { useNavigate } from 'react-router-dom';

// GoBack 컴포넌트
export const GoBack = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(-1)}
      className="GoBack"
    >
      {"<"}
    </button>
  );
};

 
// BottomSidebar 컴포넌트
export const BottomSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="bottom-sidebar">
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/chat')}>Chat</button>
      <button onClick={() => navigate('/community')}>Community</button>
      <button onClick={() => navigate('/vote')}>Vote</button>
    </div>
  );
};

// ContentWrapper 컴포넌트
export const ContentWrapper = ({ children }) => {
  return <div className="content-wrapper">{children}</div>;
};

// LogoAndHead 컴포넌트
export const LogoAndHead = ({ onProfileClick }) => {
  return (
    <div className="logo-and-head">
      <div className="logo">FAVPICK</div>
      <div className="profile-pic">Profile Pic</div>
    </div>
  );
};


