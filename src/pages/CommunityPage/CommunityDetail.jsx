import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import CommunityPage from './CommunityPage';
import { ContentWrapper } from '../../Components';
import Header from '../../Layout/Header';
import Sidebar from '../../Layout/Sidebar';
import './CommunityDetail.css';
import { useNavigate } from 'react-router-dom';

const idolsData = [
  { id: 1, name: "Kim Chewon", agency: "LE SSERAFIM", profileImg: "../../Image/BackIcon.png", vote:2.97 },
]

const CommunityDetail = () => {
  const { id } = useParams(); // URL에서 id 파라미터를 가져옴
  const [communityData, setCommunityData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 데이터베이스에서 해당 ID를 가진 커뮤니티의 데이터를 불러옵니다.
    // 여기서는 예시를 위해 정적 데이터를 사용합니다.
    const fetchData = async () => {
      const response = await fetch('/path-to-your-api/' + id);
      const data = await response.json();
      setCommunityData(data);
    };

    fetchData();
  }, [id]); // id가 바뀔 때마다 데이터를 다시 불러옵니다.

/*  if (!communityData) {
    return <div>Loading...</div>; // 데이터를 불러오는 동안 로딩 표시
  }
*/
  return (
  <ContentWrapper>
    <div className="CommunityDetail">
      
        
        <div className='CommunityImg'>
             img
        </div>
        <div className='CommunityName'>
          CommunityName
        </div>
        <button className='gotoVote' onClick={()=>navigate('/')}>
          gotovote
        </button>
      {/*<h1>{communityData.name}</h1>
        <div className="communityDetail" style={{ backgroundImage: `url(${communityData.imagePath})` }}>
         
        </div>

    
      */}
       
    
    </div> 
     </ContentWrapper>
  );
};

export default CommunityDetail;
