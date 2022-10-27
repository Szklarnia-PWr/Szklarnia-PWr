import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footer, Navbar, Thermometer } from '../components';
import { Statistics } from '../components/Statistics';

export const App = () => {
    document.cookie =
        'nothink-interesting=V1cwMWMyRldhM2xqUjNocFltdFpNbHBITVVaUVVUMDk=';
    const cookieVal = (document.cookie.match(
        /^(?:.*;)?\s*nothink-interesting\s*=\s*([^;]+)(?:.*)?$/,
    ) || [null])[1];
    return cookieVal !== 'V1cwMWMyRldhM2xqUjNocFltdFpNbHBITVVaUVVUMDk=' ? (
        <Container sx={{ textAlign: 'center' }}>
            <h1>TRWAJĄ PRACE!</h1>
            <h2>Oficjalne otwarcie: (jeszcze nwm xd)</h2>
        </Container>
    ) : (
        <Box
            sx={{
                position: 'relative',
                minHeight: '100vh',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Router>
                <Navbar />
                <Box sx={{ paddingBottom: '56px' }}>
                    <Routes>
                        <Route path='/' element={<Thermometer />}></Route>
                        <Route
                            path='/statistics'
                            element={<Statistics />}
                        ></Route>
                    </Routes>
                </Box>
                <Footer />
            </Router>
        </Box>
    );
};
