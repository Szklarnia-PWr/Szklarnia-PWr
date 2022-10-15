import { Box } from '@mui/material';
import { useState } from 'react';

import { Charts, Highscores, TimeSwitch } from '../../components';

const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

const dateToString = (tmstmp: Date, tmrng: rangesType) => {
    if (tmrng === 'day') {
        return tmstmp.getHours() + ':' + tmstmp.getMinutes();
    } else if (tmrng === 'week') {
        return weekDay[tmstmp.getDay()];
    } else {
        return (
            monthNames[tmstmp.getMonth()] + ' ' + tmstmp.getDate().toString()
        );
    }
};

const highs: Array<HighsType> = [
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
    const [timeRange, setTimeRange] = useState<rangesType>('year');

    const data: Array<DataType> = [
        {
            time: dateToString(new Date(1665172194 * 1000), timeRange),
            Temperature: -1,
            Humidity: -1,
            Pressure: -1,
            Battery: -1,
        },
        {
            time: dateToString(new Date(1665172194 * 1000), timeRange),
            Temperature: -1,
            Humidity: -1,
            Pressure: -1,
            Battery: -1,
        },
        {
            time: dateToString(new Date(1665172194 * 1000), timeRange),
            Temperature: -1,
            Humidity: -1,
            Pressure: -1,
            Battery: -1,
        },
        {
            time: dateToString(new Date(1665172194 * 1000), timeRange),
            Temperature: -1,
            Humidity: -1,
            Pressure: -1,
            Battery: -1,
        },
        {
            time: dateToString(new Date(1665172194 * 1000), timeRange),
            Temperature: -1,
            Humidity: -1,
            Pressure: -1,
            Battery: -1,
        },
        {
            time: dateToString(new Date(1665172194 * 1000), timeRange),
            Temperature: -1,
            Humidity: -1,
            Pressure: -1,
            Battery: -1,
        },
        {
            time: dateToString(new Date(1665172194 * 1000), timeRange),
            Temperature: -1,
            Humidity: -1,
            Pressure: -1,
            Battery: -1,
        },
    ];

    return (
        <Box sx={{ marginBottom: '5rem', marginTop: '2rem', marginX: '0' }}>
            <TimeSwitch timeRange={timeRange} setRange={setTimeRange} />
            <Highscores timeRange={timeRange} highs={highs} />
            <Charts timeRange={timeRange} data={data} highs={highs} />
        </Box>
    );
};
