import { Box } from '@mui/material';

import { Charts, Highscores, TimeSwitch } from '../../components';

export const Statistics = () => {
    return (
        <Box sx={{ marginBottom: '5rem', marginTop: '2rem', marginX: '0' }}>
            <TimeSwitch />
            <Highscores />
            <Charts />
        </Box>
    );
};
