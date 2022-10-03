import { Box } from '@mui/material';

import { Charts, Highscores, TimeSwitch } from '../../components';

export const Statistics = () => {
    return (
        <Box sx={{ marginY: '5rem' }}>
            <TimeSwitch />
            <Highscores />
            <Charts />
        </Box>
    );
};
