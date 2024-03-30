import './ArtistMainPage.css'
import { GoBack, BottomSidebar, ContentWrapper, LogoAndHead } from '../../Components';
import React from 'react';
import Sidebar from '../../Layout/Sidebar';
import MyLineChart from '../../components/Line';

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

function ArtistMainPage() {


    return(
    <ContentWrapper>
        <div className="ArtistMainPage">
            <div className='ArtistMainPageidolImg'>
                {idolsData[0].Img}
            </div>
         <div className='content-wrapper'>
            <div className='ArtistMainPageGlass'>
                <div className='ArtistMainPageidolname'>
                    {idolsData[0].name}
                </div>
                <div className='ArtistMainPageidolagency'>
                    {idolsData[0].agency}
                </div>
                <div className='TotalVotedTitle'>
                    Total Voted Rappo
                </div>
                <div className='TotalVote'>
                    {idolsData[0].vote}
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
                    {idolsData.map(idolsData => (
                    <div key={idolsData.id} className="Artistcontents1">
                        <div className="ProfileImg">
                        {idolsData.profileImg} {/* 이 부분에 실제 이미지 태그나 경로를 사용할 수 있습니다. */}
                        </div>
                        <div className="info">
                        <div className="name">
                            {idolsData.name}
                        </div>
                        <div className="agency">
                            {idolsData.agency}
                        </div>
                        </div>
                    </div>
                    ))}
                    </div>
            </div>
            </div>
        </div>
        
        <Sidebar/>
    </ContentWrapper>
    )
}

export default ArtistMainPage