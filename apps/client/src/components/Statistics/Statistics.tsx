import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import { Charts, Highscores, TimeSwitch } from '../../components';
import {
    useBattery,
    useHumidity,
    usePressure,
    useTemperature,
} from '../../hooks';

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
    const { tempResult, tempLoading, tempError } = useTemperature({
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

    const { humiResult, humiLoading, humiError } = useHumidity({
        // sinceDate: startDate.toISOString(),
        device: device,
        timeRange: timeRange,
    });
    const [humidityData, setHumidityData] = useState<Array<DataType>>([
        {
            t: '0',
            v: 0,
        },
    ]);

    const { pressResult, pressLoading, pressError } = usePressure({
        // sinceDate: startDate.toISOString(),
        device: device,
        timeRange: timeRange,
    });
    const [pressureData, setPressureData] = useState<Array<DataType>>([
        {
            t: '0',
            v: 0,
        },
    ]);

    const { battResult, battLoading, battError } = useBattery({
        // sinceDate: startDate.toISOString(),
        device: device,
        timeRange: timeRange,
    });
    const [batteryData, setBatteryData] = useState<Array<DataType>>([
        {
            t: '0',
            v: 0,
        },
    ]);

    useEffect(() => {
        if (tempResult !== null) {
            setTemperatureData(tempResult);
        }
        if (humiResult !== null) {
            setHumidityData(humiResult);
        }
        if (pressResult !== null) {
            setPressureData(pressResult);
        }
        if (battResult !== null) {
            setBatteryData(battResult);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tempResult, humiResult, pressResult, battResult]);

    return (
        <Box sx={{ marginBottom: '5rem', marginTop: '2rem', marginX: '0' }}>
            {tempLoading}
            {tempError}
            {humiLoading}
            {humiError}
            {pressLoading}
            {pressError}
            {battLoading}
            {battError}
            <TimeSwitch timeRange={timeRange} setRange={setTimeRange} />
            <Highscores timeRange={timeRange} highs={highs} />
            <Charts
                timeRange={timeRange}
                temperatureData={temperatureData}
                humidityData={humidityData}
                pressureData={pressureData}
                batteryData={batteryData}
                highs={highs}
            />
        </Box>
    );
};
