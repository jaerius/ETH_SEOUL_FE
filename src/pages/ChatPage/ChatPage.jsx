import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoBack, BottomSidebar, ContentWrapper, LogoAndHead } from '../../Components';
import './ChatPage.css'
import Headers from '../../Layout/Header'
import Sidebar from '../../Layout/Sidebar';

const idolsData = [
    { id: 1, name: "Kim Chewon", agency: "LE SSERAFIM", profileImg: "" },
    { id: 2, name: "Park Jimin", agency: "BTS", profileImg: "" },
    { id: 3, name: "Kang Daniel", agency: "KONNECT Entertainment", profileImg: "" },
    { id: 4, name: "Lee Chaeyeon", agency: "WM Entertainment", profileImg: "" },
    { id: 5, name: "Miyawaki Sakura", agency: "HKT48", profileImg: "" },
    { id: 6, name: "Choi Yena", agency: "Yuehua Entertainment", profileImg: "" },
    { id: 7, name: "Kwon Eunbi", agency: "Woollim Entertainment", profileImg: "" },
    { id: 8, name: "Kim Minju", agency: "Urban Works Media", profileImg: "" },
    { id: 9, name: "Ahn Yujin", agency: "Starship Entertainment", profileImg: "" },
    { id: 10, name: "Jang Wonyoung", agency: "Starship Entertainment", profileImg: "" }
  ];


  export default function ChatPage() {
    const navigate = useNavigate();
    const handleIdolClick = (idolId) => {
        navigate(`/ChatPage/${idolId}`); // Navigate to CommunityMain with the community ID
      }
    return (
    
      <ContentWrapper>
        <Headers/>
        
        <div className="Chats">Chats</div>
        

          <div className="ChatPage">    
            {idolsData.map(idol => (
                <div
                key={idol.id}
                className="idolClick"
                onClick={() => handleIdolClick(idol.id)} // Click handler to navigate
            >
            <div key={idol.id} className="Artistcontents">
                <div className="ProfileImg">
                {idol.profileImg} {/* 이 부분에 실제 이미지 태그나 경로를 사용할 수 있습니다. */}
                </div>
                <div className="info">
                <div className="name">
                    {idol.name}
                </div>
                <div className="agency">
                    {idol.agency}
                </div>
                </div>
                </div>
            </div>
            ))}
          </div>
        <Sidebar/>
      </ContentWrapper>
    );
  }