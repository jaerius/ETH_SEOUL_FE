import MainPage from "../pages/MainPage/MainPage"
import ChatPage from "../pages/ChatPage/ChatPage"
import CommunityPage from "../pages/CommunityPage/CommunityPage"
import VotePage from "../pages/VotePage/VotePage"
import './Sidebar.css'
import { useNavigate } from 'react-router-dom';
import { FaHome, FaComments, FaUsers, FaVoteYea } from 'react-icons/fa'; // 아이콘 임포트



const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <div className="bottom-sidebar">
            <button className="nav-button" onClick={() => navigate('/')}><FaHome className="icon" /></button>
            <button className="nav-button" onClick={() => navigate('/ChatPage')}><FaComments className="icon" /></button>
            <button className="nav-button" onClick={() => navigate('/CommunityPage')}><FaUsers className="icon" /></button>
            <button className="nav-button" onClick={() => navigate('/VotePage')}><FaVoteYea className="icon" /></button>
        </div>
    );
}

export default Sidebar