import './CommunityPage.css'
import { LogoAndHead } from '../../Components'
import { ContentWrapper } from '../../Components'
import Slide from '../../components/Slide'
import CardsCarousel from '../../components/Carousels'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const myCommunityData = [
    { title: 'Community 1', description: 'Description 1' },
    { title: 'Community 2', description: 'Description 2' },
    // ...other data
  ];

  const artistsCommunityData = [
    { title: 'Artist Community 1', description: 'Description 1' },
    { title: 'Artist Community 2', description: 'Description 2' },
    // ...other data
  ];

  function MyCarousel({ children }) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };
  
    return <Slider {...settings}>{children}</Slider>;
  }
  function ShareIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" x2="12" y1="2" y2="15" />
      </svg>
    );
  }

  
  const Card = ({ children }) => <div>{children}</div>;
const Button = ({ children }) => <button>{children}</button>;
const Badge = ({ children }) => <span>{children}</span>;

function CommunityPage() {
    return(
      <div className="Home">
        <div className="content-wrapper">
        <div className="bg-white">
      <div className="max-w-sm mx-auto">
        <header className="flex items-center justify-between p-4">
          <h1 className="text-lg font-bold">FAVPICK</h1>
          <ShareIcon className="h-6 w-6 text-blue-500" />
        </header>
        <section className="px-4 py-2">
          <h2 className="text-lg font-semibold">My Community 6</h2>
          <MyCarousel>
            <Card className="bg-white p-4 shadow rounded-lg">
              <div className="text-center">코뮤니티</div>
            </Card>
            <Card className="bg-white p-4 shadow rounded-lg">
              <div className="text-center">게시판</div>
            </Card>
            <Card className="bg-white p-4 shadow rounded-lg">
              <div className="text-center">세미나</div>
            </Card>
            <Card className="bg-white p-4 shadow rounded-lg">
              <div className="text-center">강좌</div>
            </Card>
          </MyCarousel>
        </section>
        <section className="px-4 py-2">
          <h2 className="text-lg font-semibold">Recently Voted Artist's Community</h2>
          <MyCarousel>
            <Card className="bg-white p-4 shadow rounded-lg">
              <div className="h-24" />
            </Card>
            <Card className="bg-white p-4 shadow rounded-lg">
              <div className="h-24" />
            </Card>
          </MyCarousel>
        </section>
        <section className="px-4 py-2">
          <h2 className="text-lg font-semibold">Community Ranking</h2>
          <div className="mt-4">
            <Card className="bg-white p-4 shadow rounded-lg flex items-center">
              <div className="flex-grow">
                <div className="font-bold">테스트커뮤니티</div>
                <div className="text-sm text-gray-500">아티스트, 음악</div>
              </div>
              <div>
                <Badge variant="secondary">3,280</Badge>
              </div>
            </Card>
          </div>
          <div className="flex justify-between mt-4 px-2">
            <Button className="text-sm" variant="ghost">
              홈
            </Button>
            <Button className="text-sm" variant="ghost">
              커뮤니티
            </Button>
            <Button className="text-sm" variant="ghost">
              투표
            </Button>
          </div>
        </section>
      </div>
    </div>
              
                </div>            
    </div>

    )
}

export default CommunityPage