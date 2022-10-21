import { Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footer, Navbar, Thermometer } from '../components';
import { Statistics } from '../components/Statistics';

export const App = () => {
    const cookieVal = (document.cookie.match(
        /^(?:.*;)?\s*nothink-interesting\s*=\s*([^;]+)(?:.*)?$/,
    ) || [, null])[1];
    return cookieVal !== 'V1cwMWMyRldhM2xqUjNocFltdFpNbHBITVVaUVVUMDk=' ? (
        <h1>TRWAJĄ PRACE!</h1>
    ) : (
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
