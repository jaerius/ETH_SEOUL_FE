import React from 'react'
import { GoBack, BottomSidebar, ContentWrapper, LogoAndHead } from '../../Components';


function MainPage() {
    return (
        <div className="MainPage">
            <ContentWrapper>
            <GoBack/>
                
            </ContentWrapper>
            <BottomSidebar/>
        </div>
    )
}

export default MainPage