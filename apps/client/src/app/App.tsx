import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footer, Navbar, Thermometer } from '../components';

export const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Thermometer />}></Route>
                <Route path='/statistics' element={<Thermometer />}></Route>
            </Routes>
            <Footer />
        </Router>
    );
};
