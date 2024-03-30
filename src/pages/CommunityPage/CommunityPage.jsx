import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'; // Slider 컴포넌트 import
import { GoBack, BottomSidebar, ContentWrapper, LogoAndHead } from '../../Components';
import Headers from '../../Layout/Header';
import './CommunityPage.css';
import Sidebar from '../../Layout/Sidebar';
import Header from '../../Layout/Header';


const communityData = [
  { id: 1, CommunityName: "Community 1", MyCommunityImg: "" },
  { id: 2, CommunityName: "Community 2", MyCommunityImg: "" },
  { id: 3, CommunityName: "Community 3", MyCommunityImg: "" },
  { id: 4, CommunityName: "Community 4", MyCommunityImg: "" },
  { id: 5, CommunityName: "Community 5", MyCommunityImg: "" },
  { id: 6, CommunityName: "Community 6", MyCommunityImg: "" },
  { id: 7, CommunityName: "Community 7", MyCommunityImg: "" },
  { id: 8, CommunityName: "Community 8", MyCommunityImg: "" },
  { id: 9, CommunityName: "Community 9", MyCommunityImg: "" },
  { id: 10, CommunityName: "Community 10", MyCommunityImg: "" }
];


export default function CommunityPage() {

  const navigate = useNavigate(); // Hook to get the navigate function

  const handleCommunityClick = (communityId) => {
    navigate(`/Community/${communityId}`); // Navigate to CommunityMain with the community ID
  };

   const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  
  return (
    <ContentWrapper>
      <Header/>
      <div className="CommunityPage">
        <div className="MyCommunity">
          <div className="MyCommunityTitle">My Community</div>
          <Slider {...settings}> {/* Slider 컴포넌트 사용 */}
            {communityData.map((community) => (
              <div
              key={community.id}
              className="Community"
              onClick={() => handleCommunityClick(community.id)} // Click handler to navigate
            >
                <div className="MyCommunityImg">
                  {community.MyCommunityImg}
                </div>
                <div className="CommunityName">
                  {community.CommunityName}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="CommunityRankingContainer">
          <div className="CommunityRankingTitle">Community Ranking</div>
          <input type="text" placeholder="Type here" className="CommunityRankinginput" />
          <div className="MainPage">    
          {communityData.map((community) => (
            <div key={community.id} className="Artistcontents">
                <div className="ProfileImg">
                {community.MyCommunityImg} {/* 이 부분에 실제 이미지 태그나 경로를 사용할 수 있습니다. */}
                </div>
                <div className="info">
                <div className="name">
                    {community.CommunityName}
                </div>
                </div>
            </div>
            ))}
          </div>
        </div>
        
      </div>
      <Sidebar/>
    </ContentWrapper>
  );
}