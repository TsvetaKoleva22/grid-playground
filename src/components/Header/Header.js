import classnames from 'classnames'
import Navigation from '../Navigation';
import logo from '../../assets/images/logo.svg'

import './Header.scss';

const Header = ( { classes } ) => (
    <header className={classnames("header", classes)}>
        <div className="header__logo-area">
            <img src={logo} alt="Logo" />
        </div>

        <Navigation />
    </header>
);

export default Header;
