import classnames from 'classnames'
import './Footer.scss';

const Footer = ({ classes }) => (
    <footer className={classnames("footer", classes)}>
        <div className="footer__item">Footer Item 1</div>
        <div className="footer__item">Footer Item 2</div>
        <div className="footer__item">Footer Item 3</div>
    </footer>
);

export default Footer;
