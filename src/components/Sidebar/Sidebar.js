import classnames from 'classnames'
import './Sidebar.scss';

const Sidebar = ({ classes }) => (
    <aside className={classnames("sidebar", classes)}>
        <div className="sidebar__item">Sidebar Item 1</div>
        <div className="sidebar__item">Sidebar Item 2</div>
        <div className="sidebar__item">Sidebar Item 3</div>
        <div className="sidebar__item">Sidebar Item 4</div>
        <div className="sidebar__item">Sidebar Item 5</div>
        <div className="sidebar__item">Sidebar Item 6</div>
    </aside>
);

export default Sidebar;
