import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css'; // Ensure you link the correct CSS file
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useWallet } from '../../WalletContext';


function RegisterPage() {

    const navigate = useNavigate();
    const { walletAddress, setWalletAddress } = useWallet();
    const [nickname, setNickName] = useState();
    console.log(walletAddress);
    const handleNickNameChange = (e) => {
        setNickName(e.target.value);
    };
    const handleCreateAccountClick = () => {
        if (walletAddress) { // walletAddress 상태가 유효할 때 실행
            console.log(walletAddress); // 이제 업데이트된 상태로 출력됩니다.
            axios.post('http://localhost:8800/api/user/register', { nickname: nickname, walletAddress: walletAddress })
              .then(response => {
                if (response.data._id) {
                  navigate('/');
                } else {
                  navigate('/RegisterPage', { state: { walletAddress } });
                }
              })
              .catch(error => {
                console.error("Failed to login:", error);
                navigate('/RegisterPage');
              });
          }
          console.log(nickname)
          console.log(walletAddress) 
       }


        return (
            <div className="LoginPage">
            <div className="content-wrapper">
                <div className="content">
                <div className="glass">
                    <div className="name">FAVPICK</div>
                    <input className="nickname" type='text' placeholder='Nickname' onChange={handleNickNameChange} />
                    <input className="email" type='text' placeholder='Email' />
                    <button className="button1" onClick={handleCreateAccountClick}>Create Account</button>
                </div> {/*여기서 axios로 백엔드에 정보 넘겨줘서 user테이블 생성하기*/}            
                </div>
            </div>
            </div>
        );
}

export default RegisterPage;

