import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Content from './Content';
import Footer from '../../components/Footer';
import './LayoutPage.scss';

const LayoutPage = () => {
    return (
        <div className="layout-page">
            <Header classes="layout-page__header"/>

            <Sidebar classes="layout-page__sidebar"/>

            <Content classes="layout-page__content"/>

            <Footer classes="layout-page__footer"/>
        </div>
    )
};

export default LayoutPage;
