import { Box, Container, Paper, Typography, useTheme } from '@mui/material';
import React from 'react';
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

const data = [
    {
        time: 'Mon',
        Temperature: 4000,
        Humidity: 2400,
        Pressure: 2400,
        Battery: 100,
    },
    {
        time: 'Tue',
        Temperature: 3000,
        Humidity: 1398,
        Pressure: 2210,
        Battery: 95,
    },
    {
        time: 'Wed',
        Temperature: 2000,
        Humidity: 9800,
        Pressure: 2290,
        Battery: 90,
    },
    {
        time: 'Thu',
        Temperature: 2780,
        Humidity: 3908,
        Pressure: 2000,
        Battery: 82,
    },
    {
        time: 'Fri',
        Temperature: 1890,
        Humidity: 4800,
        Pressure: 2181,
        Battery: 80,
    },
    {
        time: 'Sat',
        Temperature: 2390,
        Humidity: 3800,
        Pressure: 2500,
        Battery: 78,
    },
    {
        time: 'Sun',
        Temperature: 3490,
        Humidity: 4300,
        Pressure: 2100,
        Battery: 70,
    },
];

const highs = [
    {
        parameter: 'Temperature [°C]',
        maxTime: 43,
        maxEver: 45,
        minTime: 15,
        minEver: 9,
    },
    {
        parameter: 'Humidity [%]',
        maxTime: 56,
        maxEver: 81,
        minTime: 43,
        minEver: 43,
    },
    {
        parameter: 'Pressure [hPa]',
        maxTime: 1002,
        maxEver: 1201,
        minTime: 999,
        minEver: 994,
    },
    {
        parameter: 'Battery [%]',
        maxTime: 93,
        maxEver: 100,
        minTime: 86,
        minEver: 86,
    },
];

export const Charts = () => {
    const theme = useTheme();

    return (
        <Container maxWidth='xl'>
            <Box sx={{ marginBottom: '5rem' }}>
                <h2>Temperature</h2>

                <ResponsiveContainer width='100%' height={325}>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <defs>
                            <linearGradient
                                id='chartGradient'
                                x1='0'
                                y1='0'
                                x2='0'
                                y2='1'
                            >
                                <stop
                                    offset='5%'
                                    stopColor={theme.palette.primary.main}
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset='95%'
                                    stopColor={theme.palette.primary.main}
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='time' />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type='monotone'
                            dataKey='Temperature'
                            fill='url(#chartGradient)'
                            stroke={theme.palette.primary.main}
                            fillOpacity={1}
                        />
                    </AreaChart>
                </ResponsiveContainer>
                <Paper
                    sx={{
                        textAlign: 'center',
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <Typography>
                        Max: {highs[0].maxTime} / Min: {highs[0].minTime}
                    </Typography>

                    <Typography>
                        Max ever: {highs[0].maxEver} / Min ever :{' '}
                        {highs[0].minEver}
                    </Typography>
                </Paper>
            </Box>

            <Box sx={{ marginBottom: '5rem' }}>
                <h2>Humidity</h2>
                <ResponsiveContainer width='100%' height={325}>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='time' />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type='monotone'
                            dataKey='Humidity'
                            stroke={theme.palette.primary.main}
                            fill='url(#chartGradient)'
                        />
                    </AreaChart>
                </ResponsiveContainer>
                <Paper
                    sx={{
                        textAlign: 'center',
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <Typography>
                        Max: {highs[1].maxTime} / Min: {highs[1].minTime}
                    </Typography>

                    <Typography>
                        Max ever: {highs[1].maxEver} / Min ever :{' '}
                        {highs[1].minEver}
                    </Typography>
                </Paper>
            </Box>

            <Box sx={{ marginBottom: '5rem' }}>
                <h2>Pressure</h2>
                <ResponsiveContainer width='100%' height={325}>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='time' />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type='monotone'
                            dataKey='Pressure'
                            stroke={theme.palette.primary.main}
                            fill='url(#chartGradient)'
                        />
                    </AreaChart>
                </ResponsiveContainer>
                <Paper
                    sx={{
                        textAlign: 'center',
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <Typography>
                        Max: {highs[2].maxTime} / Min: {highs[2].minTime}
                    </Typography>

                    <Typography>
                        Max ever: {highs[2].maxEver} / Min ever :{' '}
                        {highs[2].minEver}
                    </Typography>
                </Paper>
            </Box>

            <Box sx={{ marginBottom: '5rem' }}>
                <h2>Battery</h2>
                <ResponsiveContainer width='100%' height={325}>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='time' />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type='monotone'
                            dataKey='Battery'
                            stroke={theme.palette.primary.main}
                            fill='url(#chartGradient)'
                        />
                    </AreaChart>
                </ResponsiveContainer>
                <Paper
                    sx={{
                        textAlign: 'center',
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <Typography>
                        Max: {highs[3].maxTime} / Min: {highs[3].minTime}
                    </Typography>

                    <Typography>
                        Max ever: {highs[3].maxEver} / Min ever :{' '}
                        {highs[3].minEver}
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};
