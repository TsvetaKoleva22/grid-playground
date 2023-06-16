import { NavLink } from "react-router-dom";

import './Navigation.scss';

const navItems = [
    {title: 'Home', path: '/'},
    {title: 'Layout', path: '/layout'},
    {title: 'Articles', path: '/articles'},
    {title: 'Cards', path: '/cards'},
    {title: 'Positions', path: '/positions'}
]

const Navigation = () => (
    <nav className="navigation">
        {navItems.map(item => (
            <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                    isActive ? 'navigation__link navigation__link--active' : 'navigation__link'
                }
            >
                {item.title}
          </NavLink>
        ))}
    </nav>
);

export default Navigation;
