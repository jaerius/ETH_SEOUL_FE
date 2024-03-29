import MainPage from "../pages/MainPage/MainPage"
import ChatPage from "../pages/ChatPage/ChatPage"
import CommunityPage from "../pages/CommunityPage/CommunityPage"
import VotePage from "../pages/VotePage/VotePage"
import './Sidebar.css'

const Sidebar = () => {
    return(
    <div className="bottom-sidebar">
        <button className="nav-button1" onClick={<MainPage />}>Home</button>
        <button className="nav-button2" onClick={<ChatPage/>}>Chat</button>
        <button className="nav-button3" onClick={<CommunityPage/>}>Community</button>
        <button className="nav-button4" onClick={<VotePage/>}>Vote</button>
    </div>
    )
}

export default Sidebar