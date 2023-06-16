import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from './Card';
import { sampleCards } from './sampleCards'
import './CardsPage.scss';

const CardsPage = () => {
    return (
        <div className="cards-page">
            <Header classes="cards-page__header"/>

            <main className="cards-page__content">
                <h1>Implicit and explicit grid</h1>
                <div className="cards-page__cards">
                    {sampleCards.slice(0, 7).map(card => <Card key={card.id} imageUrl={card.imageUrl} title={card.title} text={card.text}/>)}
                </div>
            </main>

            <Footer classes="cards-page__footer"/>
        </div>
    )
};

export default CardsPage;
