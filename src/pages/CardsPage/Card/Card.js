import './Card.scss';

const Card = ({
    imageUrl,
    title,
    text
}) => {
    return (
        <div className="card">
            <div className="card__img">
                <img src={imageUrl} alt={title} />
            </div>

            <h3 className="card__title">{title}</h3>
            <p className="card__text">{text}</p>
        </div>
    )
};

export default Card;
