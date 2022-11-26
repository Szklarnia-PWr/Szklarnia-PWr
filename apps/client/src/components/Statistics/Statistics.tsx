import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { Charts, Highscores, TimeSwitch } from '../../components';
import { useTemperature } from '../../hooks';

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
    const { tempResult, loading, error } = useTemperature({
        // sinceDate: startDate.toISOString(),
        device: device,
        timeRange: timeRange,
    });
    const [temperatureData, setTemperatureData] = useState<Array<DataType>>([
        {
            t: '0',
            v: 0,
        },
    ]);
    let startDate = new Date();
    if (timeRange === 'day') {
        startDate.setDate(startDate.getDay() - 1);
    } else if (timeRange === 'week') {
        startDate.setDate(startDate.getDate() - 7);
    } else if (timeRange === 'month') {
        startDate.setMonth(startDate.getMonth() - 1);
    } else if (timeRange === 'year') {
        startDate.setMonth(startDate.getMonth() - 12);
    }
    console.log(startDate.toISOString());

    useEffect(() => {
        if (tempResult !== null) {
            setTemperatureData(tempResult);
            console.log(temperatureData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tempResult]);

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
