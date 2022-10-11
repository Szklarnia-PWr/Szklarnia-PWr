import { Box } from '@mui/material';
import { useState } from 'react';

import { Charts, Highscores, TimeSwitch } from '../../components';

type rangesType = 'day' | 'week' | 'month' | 'year';

export const Statistics = () => {
    const [timeRange, setTimeRange] = useState<rangesType>('week');
    return (
        <Box sx={{ marginBottom: '5rem', marginTop: '2rem', marginX: '0' }}>
            <TimeSwitch timeRange={timeRange} setRange={setTimeRange} />
            <Highscores timeRange={timeRange} />
            <Charts />
        </Box>
    );
};
