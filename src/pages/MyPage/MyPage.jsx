import React, { useEffect, useState } from 'react';
import './MyPage.css'
import { ContentWrapper } from '../../Components';
import Header from '../../Layout/Header';
import Sidebar from '../../Layout/Sidebar';

export default function MyPage(){
    return(
        <ContentWrapper>
            <Header/>
                <div className="profile">
                    <div className="profileImg">
                        profileImg
                    </div>
                    <div className='profileInfo'>
                        profileInfo
                    </div>
                </div>
                <div className="profileWallet">
                    <div className="profileWalletTitle">
                        profileWallet
                    </div>
                    <div classNam="profileWalletInfo">
                        
                    </div>
                </div>
            <Sidebar/>
        </ContentWrapper>
    )
}