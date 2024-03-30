import './ArtistMainPage.css'
import { GoBack, BottomSidebar, ContentWrapper, LogoAndHead } from '../../Components';
import React from 'react';

const idolData =[
    { id: 1, Name: "HUH YUNJIN", agency: "LE SSERAFIM" ,Img: "img", vote: "2.93k"},
]

function ArtistMainPage() {


    return(
    <ContentWrapper>
        <div className="ArtistMainPage">
            <div className='ArtistMainPageidolImg'>
                {idolData[0].Img}
            </div>
            <div className='ArtistMainPageidolInfo'>
                <div className='ArtistMainPageidolname'>
                    {idolData[0].Name}
                </div>
                <div className='ArtistMainPageidolagency'>
                    {idolData[0].agency}
                </div>
                <div className='TotalVotedTitle'>
                    Total Voted
                </div>
                <div className='TotalVote'>
                    {idolData[0].vote}
                </div>
                <button className='VoteButton'>
                    Vote
                </button>
            </div>
            <div className="ArtistMainPageContent">
            </div>
        </div>
    </ContentWrapper>
    )
}

export default ArtistMainPage