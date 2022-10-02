import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Chart, Footer, Navbar, Thermometer } from '../components';

export const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Thermometer />}></Route>
                <Route path='/statistics' element={<Chart />}></Route>
            </Routes>
            <Footer />
        </Router>
    );
};
