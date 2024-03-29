import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css'; // Ensure you link the correct CSS file

function RegisterPage() {

    const navigate = useNavigate();

        return (
            <div className="LoginPage">
            <div className="content-wrapper">
                <div className="content">
                <div className="glass">
                    <div className="name">FAVPICK</div>
                    <input className="nickname" type='text' placeholder='Nickname' />
                    <input className="email" type='text' placeholder='Email' />
                    <button className="button1" onClick={()=>navigate('../')}>Create Account</button>
                </div> {/*여기서 axios로 백엔드에 정보 넘겨줘서 user테이블 생성하기*/}            
                </div>
            </div>
            </div>
        );
}

export default RegisterPage;
