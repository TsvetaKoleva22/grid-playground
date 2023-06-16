import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import LayoutPage from './pages/LayoutPage';
import ArticlesPage from './pages/ArticlesPage';
import CardsPage from './pages/CardsPage';
import Positions from './pages/Positions';
import NotFoundPage from './pages/NotFoundPage';

import './App.scss';

function App() {
    return (
        <div className="wrapper">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/layout' element={<LayoutPage />} />
                <Route path='/articles' element={<ArticlesPage />} />
                <Route path='/cards' element={<CardsPage />} />
                <Route path='/positions' element={<Positions />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;
