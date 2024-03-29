import './ArtistMainPage.css'
import { GoBack, BottomSidebar, ContentWrapper, LogoAndHead } from '../../Components';
import React from 'react';

const idolData =[
    { id: 1, CommunityName: "Community 1", MyCommunityImg: "img" },
]

function ArtistMainPage() {

    return(
    <ContentWrapper>
        <div className="ArtistMainPage">
            <div className='ArtistMainPageidolImg'>
                {idolData[0].MyCommunityImg}
            </div>
            <div className='ArtistMainPageidolInfo'>

            </div>
            <div className="ArtistMainPageContent">

            </div>
        </div>
    </ContentWrapper>
    )
}

export default ArtistMainPage