import './ArtistMainPage.css'
import { GoBack, BottomSidebar, ContentWrapper, LogoAndHead } from '../../Components';
import {useState, useEffect} from 'react';
import axios from 'axios';
import React from 'react';
import Sidebar from '../../Layout/Sidebar';
import MyLineChart from '../../components/Line';
import { useLocation } from 'react-router-dom';


/*
const idolsData = [
    { id: 1, name: "Kim Chewon", agency: "LE SSERAFIM", profileImg: "", vote:2.97 },
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
*/


function ArtistMainPage() {
    const location = useLocation();
    const idolDataFromPreviousPage = location.state?.idol;

    const [idolData, setIdolData] = useState({});

    useEffect(() => {
        // 아이돌 정보가 존재할 때만 요청을 보냅니다.
        if (idolDataFromPreviousPage?.id) {
            axios.put(`http://localhost:8800/api/idol/idolProfile/${idolDataFromPreviousPage.id}`)
            .then(response => {
                setIdolData(response.data);
            })
            .catch((err) => {
                console.error("Failed to get an idol", err);
            });
        }
    }, [idolDataFromPreviousPage?.id]); 


    return(
    <ContentWrapper>
        <div className="ArtistMainPage">
            <img className='ArtistMainPageidolImg' src={idolDataFromPreviousPage.profilePic} alt={idolDataFromPreviousPage.name}/>
               
            
         <div className='content-wrapper'>
            <div className='ArtistMainPageGlass'>
                <div className='ArtistMainPageidolname'>
                    {idolDataFromPreviousPage.name}
                </div>
                <div className='ArtistMainPageidolagency'>
                    {idolDataFromPreviousPage.agency}
                </div>
                <div className='TotalVotedTitle'>
                    Total Voted Rappo
                </div>
                <div className='TotalVote'>
                    {idolDataFromPreviousPage.totalTokens}
                </div>
                <button className='VoteButton'>
                    Vote
                </button>
            </div>

           <div className="graphContainer">
                <MyLineChart/>
            </div> 

            <div className="ArtistMainPageContent">

                <div className="RappoTitle">Rappo Ranking</div>

                    <div className="RappoRanking">    
                    
                    <div key={idolDataFromPreviousPage.idolId} className="Artistcontents1">
                        
                        <img src={idolDataFromPreviousPage.profileImg} alt={idolDataFromPreviousPage.name} /> {/* 이 부분에 실제 이미지 태그나 경로를 사용할 수 있습니다. */}
                        
                        <div className="info">
                        <div className="name">
                            {idolDataFromPreviousPage.name}
                        </div>
                        <div className="agency">
                            {idolDataFromPreviousPage.agency}
                        </div>
                        </div>
                    </div>
                    
                    </div>
            </div>
            </div>
        </div>
        
        <Sidebar/>
    </ContentWrapper>
    )
}

export default ArtistMainPage