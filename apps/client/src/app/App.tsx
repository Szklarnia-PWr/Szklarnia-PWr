import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footer, Navbar, Thermometer } from '../components';
import { Statistics } from '../components/Statistics';

export const App = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Thermometer />}></Route>
                    <Route path='/statistics' element={<Statistics />}></Route>
                </Routes>
                <Footer />
            </Router>
        </Box>
    );
};
