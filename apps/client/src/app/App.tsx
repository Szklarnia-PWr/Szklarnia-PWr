import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Charts, Footer, Navbar, Thermometer } from '../components';

export const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Thermometer />}></Route>
                <Route path='/statistics' element={<Charts />}></Route>
            </Routes>
            <Footer />
        </Router>
    );
};
