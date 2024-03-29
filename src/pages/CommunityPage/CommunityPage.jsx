import './CommunityPage.css'
import { LogoAndHead } from '../../Components'
import { ContentWrapper } from '../../Components'
import CardsCarousel from '../../components/Carousels'



function CommunityPage() {
    return(
        <ContentWrapper>
            <LogoAndHead/>
                <CardsCarousel/>
        </ContentWrapper>

    )
}

export default CommunityPage