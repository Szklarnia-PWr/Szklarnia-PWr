import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footer, Navbar, Termometer } from '../components';

export const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Termometer />}></Route>
                <Route path='/statistics' element={<Termometer />}></Route>
            </Routes>
            <Footer />
        </Router>
    );
};
