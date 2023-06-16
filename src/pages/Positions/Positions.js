import Header from '../../components/Header';
import './Positions.scss';

const Positions = () => {
    return (
        <div className="positions">
            <Header />

            <h1>Justify and allign properties</h1>

            <div className="positions__container">
                <div className="positions__item">Aconsectetur adipisicing elit. Optio Laboriosam.</div>
                <div className="positions__item">Dignissimos vero voluptatum dolore corporis possim.</div>
                <div className="positions__item">Nisi velit laborum, sequi sit perferendis accusantium.</div>
                <div className="positions__item">Sconsectetur adipisicing elit. Optio ist.</div>
                <div className="positions__item">Quis architecto non obcaecati earum ab est ratione.</div>
                <div className="positions__item positions__special-item">Itaque, ab dolor.</div>
            </div>
        </div>
    );
}

export default Positions;
