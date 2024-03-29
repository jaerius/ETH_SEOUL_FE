import { useParams } from 'react-router-dom';
import CommunityMain from './CommunityMain.css';
import React from 'react';

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

export default function CommunityMain() {
    let { id } = useParams();

    return (
        <div>
          <h1>Community ID: {id}</h1>
          
        </div>
      );
}