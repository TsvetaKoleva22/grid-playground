import Header from '../../components/Header';
import Container from '../../components/Container';
import InfoSection from '../../components/InfoSection';
import gridFlexImage from '../../assets/images/examples_img.png';
import tracksLinesImage from '../../assets/images/tracks_lines.png'

const Home = () => {
    return (
        <div className="home-page">
            <Header />

            <Container className="home-page__container">
                <InfoSection>
                    <img src={gridFlexImage} alt="Examples" />
                </InfoSection>
                <InfoSection>
                    <img src={tracksLinesImage} alt="Tracks" />
                </InfoSection>
            </Container>
        </div>
    );
}

export default Home;
