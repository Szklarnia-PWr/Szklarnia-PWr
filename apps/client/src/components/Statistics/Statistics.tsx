import { Box } from '@mui/material';
import { useState } from 'react';

import { Charts, Highscores, TimeSwitch } from '../../components';

type rangesType = 'day' | 'week' | 'month' | 'year';

const data = [
    {
        time: 'Mon',
        Temperature: -1,
        Humidity: -1,
        Pressure: -1,
        Battery: -1,
    },
    {
        time: 'Tue',
        Temperature: -1,
        Humidity: -1,
        Pressure: -1,
        Battery: -1,
    },
    {
        time: 'Wed',
        Temperature: -1,
        Humidity: -1,
        Pressure: -1,
        Battery: -1,
    },
    {
        time: 'Thu',
        Temperature: -1,
        Humidity: -1,
        Pressure: -1,
        Battery: -1,
    },
    {
        time: 'Fri',
        Temperature: -1,
        Humidity: -1,
        Pressure: -1,
        Battery: -1,
    },
    {
        time: 'Sat',
        Temperature: -1,
        Humidity: -1,
        Pressure: -1,
        Battery: -1,
    },
    {
        time: 'Sun',
        Temperature: -1,
        Humidity: -1,
        Pressure: -1,
        Battery: -1,
    },
];

const highs = [
    {
        parameter: 'Temperature [°C]',
        maxTime: -1,
        maxEver: -1,
        minTime: -1,
        minEver: -1,
    },
    {
        parameter: 'Humidity [%]',
        maxTime: -1,
        maxEver: -1,
        minTime: -1,
        minEver: -1,
    },
    {
        parameter: 'Pressure [hPa]',
        maxTime: -1,
        maxEver: -1,
        minTime: -1,
        minEver: -1,
    },
    {
        parameter: 'Battery [%]',
        maxTime: -1,
        maxEver: -1,
        minTime: -1,
        minEver: -1,
    },
];

export const Statistics = () => {
    const [timeRange, setTimeRange] = useState<rangesType>('week');
    return (
        <Box sx={{ marginBottom: '5rem', marginTop: '2rem', marginX: '0' }}>
            <TimeSwitch timeRange={timeRange} setRange={setTimeRange} />
            <Highscores timeRange={timeRange} highs={highs} />
            <Charts timeRange={timeRange} data={data} highs={highs} />
        </Box>
    );
};
