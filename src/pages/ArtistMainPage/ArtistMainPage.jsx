import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './ArtistMainPage.css';
import Sidebar from '../../Layout/Sidebar'; // 경로에 따라 수정해야 할 수도 있습니다.
import MyLineChart from '../../components/Line'; // 경로에 따라 수정해야 할 수도 있습니다.
import { useWallet } from '../../WalletContext'; // 경로에 따라 수정해야 할 수도 있습니다.
import { ContentWrapper } from '../../Components'; // 경로에 따라 수정해야 할 수도 있습니다.

function ArtistMainPage() {
    const location = useLocation();
    const idolDataFromPreviousPage = location.state?.idol;
    const { walletAddress } = useWallet();

    const [showInput, setShowInput] = useState(false); // 입력 창 표시 여부
    const [voteValue, setVoteValue] = useState(''); // 투표 값
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        if (idolDataFromPreviousPage?.id) {
            axios.put(`http://localhost:8800/api/idol/idolProfile/${idolDataFromPreviousPage.id}`)
                .then(response => {
                    // 아이돌 정보 업데이트
                })
                .catch((err) => {
                    console.error("Failed to get an idol", err);
                });
        }
    }, [idolDataFromPreviousPage?.id]);

    const handleVoteClick = () => {
        if (!showInput) {
            setShowInput(true); // 입력 창을 표시
        } else {
            // 이미 입력 창이 표시된 상태이며, 사용자가 값을 입력하고 'Vote'를 다시 누름
            if (voteValue.trim() === '') {
                // 입력값이 공백인 경우 입력 창을 닫음
                setShowInput(false);
                setVoteValue('');
            } else if (isNaN(voteValue)) {
                // 입력값이 숫자가 아닌 경우 경고하고 초기화
                alert('Please enter a valid number.');
                setVoteValue('');
            } else {
                // 유효한 숫자가 입력된 경우 투표를 진행
                axios.post('http://localhost:8800/api/vote/vote', {
                    idolId: idolDataFromPreviousPage.idolId,
                    walletAddress: walletAddress,
                    paidTokens: parseFloat(voteValue),
                }).then(response => {
                    console.log('Vote successful', response);
                    setShowInput(false); // 입력 창 숨기기
                    setVoteValue(''); // 입력 값 초기화
                    setShowSuccessMessage(true);

                }).catch(error => {
                    console.error('Failed to submit vote', error);
                });
            }
        }
    };

    return (
        <ContentWrapper>
            <div className="ArtistMainPage">
                <img className='ArtistMainPageidolImg' src={idolDataFromPreviousPage.profilePic} alt={idolDataFromPreviousPage.name} />
                <div className='content-wrapper'>
                    <div className='ArtistMainPageGlass'>
                        <div className='ArtistMainPageidolname'>{idolDataFromPreviousPage.name}</div>
                        <div className='ArtistMainPageidolagency'>{idolDataFromPreviousPage.agency}</div>
                        <div className='TotalVotedTitle'>Total Voted Rappo</div>
                        <div className='TotalVote'>{idolDataFromPreviousPage.vote}</div>
                        {showInput && (
                            <input
                                type="text"
                                value={voteValue}
                                onChange={(e) => setVoteValue(e.target.value)}
                                placeholder="Enter your vote"
                                className='VoteInput'
                            />
                        )}
                        <button className='VoteButton' onClick={handleVoteClick}>
                            {showInput ? 'Submit' : 'Vote'}
                        </button>
                        {showSuccessMessage && <p>success!</p>}
                    </div>
                <div className="graphContainer">
                    <MyLineChart />
                </div> 
            </div>
        </div>
        <Sidebar />
    </ContentWrapper>
    )
}

export default ArtistMainPage