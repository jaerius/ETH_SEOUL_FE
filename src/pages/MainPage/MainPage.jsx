import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoBack, BottomSidebar, ContentWrapper, LogoAndHead } from '../../Components';
import './MainPage.css';
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

export default function ArtistPage() {
  // 사용자 입력을 추적할 상태 생성
  const [searchTerm, setSearchTerm] = useState('');

  // 사용자 입력을 업데이트하는 함수
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // 사용자 입력에 따라 idolsData 필터링
  const filteredIdols = idolsData.filter(idol => 
    idol.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    idol.agency.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ContentWrapper>
      <Headers/>
      <div className="FancyRanking">Fancy Ranking</div>
      <input 
        type="text" 
        placeholder="Type here" 
        className="input" 
        value={searchTerm}
        onChange={handleSearchChange} // 입력 필드가 변경될 때마다 handleSearchChange 호출
      />
      <div className="MainPage">
        {filteredIdols.map(idol => (
          <div key={idol.id} className="Artistcontents">
            <div className="ProfileImg">
              {idol.profileImg} {/* 이미지 태그나 경로를 여기에 사용 */}
            </div>
            <div className="info">
              <div className="name">{idol.name}</div>
              <div className="agency">{idol.agency}</div>
            </div>
          </div>
        ))}
      </div>
      <Sidebar/>
    </ContentWrapper>
  );
}
