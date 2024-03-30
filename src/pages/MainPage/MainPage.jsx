import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoBack, BottomSidebar, ContentWrapper, LogoAndHead } from '../../Components';
import './MainPage.css';
import Headers from '../../Layout/Header'
import Sidebar from '../../Layout/Sidebar';
import axios from 'axios';

/*
const idolsData = [
  { id: 1, name: "Kim Chewon", agency: "LE SSERAFIM", profilePic: "" },
  { id: 2, name: "Park Jimin", agency: "BTS", profilePic: "" },
  { id: 3, name: "Kang Daniel", agency: "KONNECT Entertainment", profilePic: "" },
  { id: 4, name: "Lee Chaeyeon", agency: "WM Entertainment", profilePic: "" },
  { id: 5, name: "Miyawaki Sakura", agency: "HKT48", profilePic: "" },
  { id: 6, name: "Choi Yena", agency: "Yuehua Entertainment", profilePic: "" },
  { id: 7, name: "Kwon Eunbi", agency: "Woollim Entertainment", profilePic: "" },
  { id: 8, name: "Kim Minju", agency: "Urban Works Media", profilePic: "" },
  { id: 9, name: "Ahn Yujin", agency: "Starship Entertainment", profilePic: "" },
  { id: 10, name: "Jang Wonyoung", agency: "Starship Entertainment", profilePic: "" }
];
*/

export default function ArtistPage() {

  // 사용자 입력을 추적할 상태 생성
  const [searchTerm, setSearchTerm] = useState('');
  const [idolsData, setIdolsData] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    axios.put('http://localhost:8800/api/idol/rank')
      .then(response => {
        setIdolsData(response.data); // 서버로부터 받아온 데이터를 상태에 저장
      })
      .catch(error => {
        console.error("Failed to get ranks", error);
      });
  }, []);

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
        <div className="FavPickRanking">FavPick Ranking</div>
        <input 
          type="text" 
          placeholder="Type here" 
          className="input" 
          value={searchTerm}
          onChange={handleSearchChange} // 입력 필드가 변경될 때마다 handleSearchChange 호출
        />
        <div className="MainPage">        
          {filteredIdols.map((idol, index) => (
            <div key={idol.id} className="Artistcontents" onClick={() => navigate(`/ArtistMainPage/${idol.idolId}`, { state: { idol } })}>
              <div className="RankingNum">{index+1}</div>
              <img className="ProfileImg" src={idol.profilePic} alt={idol.name}/>
              <div className="info">
                <div className="name">{idol.name}</div>
                <div className="agency">{idol.agency}</div>
              </div>
              <div className='VoteBarContainer'>
              <div className='VoteBar' style={{ width: `${Math.min(idol.totalTokens, 100) * 100 / 100}%` }}></div>
                <div className='VoteCount'>{idol.totalTokens} votes</div>
              </div>
            </div>
          ))}
        </div>

      <Sidebar/>
    </ContentWrapper>
  );
}