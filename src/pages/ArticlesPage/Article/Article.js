import classnames from 'classnames'

import './Article.scss';

const Article = ({
    article,
    classes
}) => {
    return (
        <article className={classnames('article', classes)}>
            <h2>{article.title}</h2>
            <h5>{article.author}</h5>
            <p>{article.text}</p>
        </article>
    )
};

export default Article;
