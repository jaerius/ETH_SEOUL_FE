import './CommunityPage.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'; // Slider 컴포넌트 import
import { GoBack, BottomSidebar, ContentWrapper, LogoAndHead } from '../../Components';
import Headers from '../../Layout/Header'


const communityData = [
  { id: 1, CommunityName: "Community 1", MyCommunityImg: "MyCommunityImg1" },
  { id: 2, CommunityName: "Community 2", MyCommunityImg: "MyCommunityImg2" },
  { id: 3, CommunityName: "Community 3", MyCommunityImg: "MyCommunityImg3" },
  { id: 4, CommunityName: "Community 4", MyCommunityImg: "MyCommunityImg4" },
  { id: 5, CommunityName: "Community 5", MyCommunityImg: "MyCommunityImg5" },
  { id: 6, CommunityName: "Community 6", MyCommunityImg: "MyCommunityImg6" },
  { id: 7, CommunityName: "Community 7", MyCommunityImg: "MyCommunityImg7" },
  { id: 8, CommunityName: "Community 8", MyCommunityImg: "MyCommunityImg8" },
  { id: 9, CommunityName: "Community 9", MyCommunityImg: "MyCommunityImg9" },
  { id: 10, CommunityName: "Community 10", MyCommunityImg: "MyCommunityImg10" }
];


export default function CommunityPage() {
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
      <div className="CommunityPage">
        <div className="MyCommunity">
          <div className="MyCommunityTitle">My Community</div>
          <Slider {...settings}> {/* Slider 컴포넌트 사용 */}
            {communityData.map((community) => (
              <div key={community.id} className="Community">
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
      </div>
    </ContentWrapper>
  );
}