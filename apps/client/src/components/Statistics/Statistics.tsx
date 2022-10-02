import { Box } from '@mui/material';

import { Charts, Highscores } from '../../components';

export const Statistics = () => {
    return (
        <Box sx={{ marginY: '5rem' }}>
            <Highscores />
            <Charts />
        </Box>
    );
};
