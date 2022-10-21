import {
    Box,
    Container,
    Grid,
    Paper,
    Typography,
    useTheme,
} from '@mui/material';
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

interface ChartsProps {
    timeRange: rangesType;
    data: Array<DataType>;
    highs: Array<HighsType>;
}

export const Charts = (props: ChartsProps) => {
    const theme = useTheme();
    return (
        <Container maxWidth='xl'>
            <Box sx={{ marginBottom: '5rem' }}>
                <h2>Temperature</h2>

                <ResponsiveContainer width='100%' height={325}>
                    <AreaChart
                        data={props.data}
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
                    elevation={0}
                    sx={{
                        textAlign: 'center',
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <Grid container spacing={0.2}>
                        <Grid item xs={2} />
                        <Grid item xs={4}>
                            <Typography>
                                Max: {props.highs[0].maxTime}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>
                                Max ever: {props.highs[0].maxEver}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} />
                        <Grid item xs={2} />
                        <Grid item xs={4}>
                            <Typography>
                                Min: {props.highs[0].minTime}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>
                                Min ever: {props.highs[0].minEver}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} />
                    </Grid>
                </Paper>
            </Box>

            <Box sx={{ marginBottom: '5rem' }}>
                <h2>Humidity</h2>
                <ResponsiveContainer width='100%' height={325}>
                    <AreaChart
                        data={props.data}
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
                    elevation={0}
                    sx={{
                        textAlign: 'center',
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <Grid container spacing={0.2}>
                        <Grid item xs={2} />
                        <Grid item xs={4}>
                            <Typography>
                                Max: {props.highs[0].maxTime}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>
                                Max ever: {props.highs[0].maxEver}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} />
                        <Grid item xs={2} />
                        <Grid item xs={4}>
                            <Typography>
                                Min: {props.highs[0].minTime}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>
                                Min ever: {props.highs[0].minEver}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} />
                    </Grid>
                </Paper>
            </Box>

            <Box sx={{ marginBottom: '5rem' }}>
                <h2>Pressure</h2>
                <ResponsiveContainer width='100%' height={325}>
                    <AreaChart
                        data={props.data}
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
                    elevation={0}
                    sx={{
                        textAlign: 'center',
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <Grid container spacing={0.2}>
                        <Grid item xs={2} />
                        <Grid item xs={4}>
                            <Typography>
                                Max: {props.highs[0].maxTime}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>
                                Max ever: {props.highs[0].maxEver}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} />
                        <Grid item xs={2} />
                        <Grid item xs={4}>
                            <Typography>
                                Min: {props.highs[0].minTime}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>
                                Min ever: {props.highs[0].minEver}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} />
                    </Grid>
                </Paper>
            </Box>

            <Box sx={{ marginBottom: '5rem' }}>
                <h2>Battery</h2>
                <ResponsiveContainer width='100%' height={325}>
                    <AreaChart
                        data={props.data}
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
                    elevation={0}
                    sx={{
                        textAlign: 'center',
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <Grid container spacing={0.2}>
                        <Grid item xs={2} />
                        <Grid item xs={4}>
                            <Typography>
                                Max: {props.highs[0].maxTime}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>
                                Max ever: {props.highs[0].maxEver}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} />
                        <Grid item xs={2} />
                        <Grid item xs={4}>
                            <Typography>
                                Min: {props.highs[0].minTime}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>
                                Min ever: {props.highs[0].minEver}
                            </Typography>
                        </Grid>
                        <Grid item xs={2} />
                    </Grid>
                </Paper>
            </Box>
        </Container>
    );
};
