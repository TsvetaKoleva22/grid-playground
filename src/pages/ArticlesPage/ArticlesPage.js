import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Article from './Article';
import { articles } from './sampleArticles'
import './ArticlesPage.scss';

const ArticlesPage = () => {
    return (
        <div className="articles-page">
            <Header classes="articles-page__header"/>

            <main className="articles-page__content">
                <div className="articles-page__articles">
                    {articles.map((article, index) =>
                        <Article key={article.id} article={article} classes={`articles-page__article articles-page__article--${index + 1}`} />)}
                </div>
            </main>

            <Footer classes="articles-page__footer"/>
        </div>
    )
};

export default ArticlesPage;
