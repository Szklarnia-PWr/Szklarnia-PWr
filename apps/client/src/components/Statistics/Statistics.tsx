import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { Charts, Highscores, TimeSwitch } from '../../components';
import { useTemperature } from '../../hooks';

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
    const [timeRange, setTimeRange] = useState<rangesType>('week');
    const device = 'esp32_c13';
    let startDate = new Date();
    if (timeRange === 'day') {
        startDate.setDate(startDate.getDay() - 1);
    } else if (timeRange === 'week') {
        startDate.setDate(startDate.getDay() - 7);
    } else if (timeRange === 'month') {
        startDate.setDate(startDate.getMonth() - 1);
    } else if (timeRange === 'year') {
        startDate.setDate(startDate.getMonth() - 12);
    }
    console.log(startDate.toISOString());
    const { tempResult, loading, error } = useTemperature({
        sinceDate: startDate.toISOString(),
        device: device,
    });
    const [temperatureData, setTemperatureData] = useState<Array<DataType>>([
        {
            t: '0',
            v: 0,
        },
    ]);

    useEffect(() => {
        if (tempResult !== null) {
            setTemperatureData(tempResult);
            console.log(temperatureData);
        }
    }, [tempResult]);

    // const data: Array<DataType> = [
    //     {
    //         time: dateToString(new Date(1665172194 * 1000), timeRange),
    //         Temperature: -1,
    //         Humidity: -1,
    //         Pressure: -1,
    //         Battery: -1,
    //     },
    //     {
    //         time: dateToString(new Date(1665172194 * 1000), timeRange),
    //         Temperature: -1,
    //         Humidity: -1,
    //         Pressure: -1,
    //         Battery: -1,
    //     },
    //     {
    //         time: dateToString(new Date(1665172194 * 1000), timeRange),
    //         Temperature: -1,
    //         Humidity: -1,
    //         Pressure: -1,
    //         Battery: -1,
    //     },
    //     {
    //         time: dateToString(new Date(1665172194 * 1000), timeRange),
    //         Temperature: -1,
    //         Humidity: -1,
    //         Pressure: -1,
    //         Battery: -1,
    //     },
    //     {
    //         time: dateToString(new Date(1665172194 * 1000), timeRange),
    //         Temperature: -1,
    //         Humidity: -1,
    //         Pressure: -1,
    //         Battery: -1,
    //     },
    //     {
    //         time: dateToString(new Date(1665172194 * 1000), timeRange),
    //         Temperature: -1,
    //         Humidity: -1,
    //         Pressure: -1,
    //         Battery: -1,
    //     },
    //     {
    //         time: dateToString(new Date(1665172194 * 1000), timeRange),
    //         Temperature: -1,
    //         Humidity: -1,
    //         Pressure: -1,
    //         Battery: -1,
    //     },
    // ];

    return (
        <Box sx={{ marginBottom: '5rem', marginTop: '2rem', marginX: '0' }}>
            {loading}
            {error}
            <TimeSwitch timeRange={timeRange} setRange={setTimeRange} />
            <Highscores timeRange={timeRange} highs={highs} />
            <Charts
                timeRange={timeRange}
                temperatureData={temperatureData}
                humidityData={temperatureData}
                pressureData={temperatureData}
                batteryData={temperatureData}
                highs={highs}
            />
        </Box>
    );
};
