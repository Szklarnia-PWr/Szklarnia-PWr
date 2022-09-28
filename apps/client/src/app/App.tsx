import { Footer, Navbar, Termometer } from '../components';

import './App.css';

export const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Termometer />
            <Footer />
        </div>
    );
};
