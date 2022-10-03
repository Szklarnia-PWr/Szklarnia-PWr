import { Container, Tab, Tabs } from '@mui/material';
import React from 'react';

export const TimeSwitch = () => {
    const timeRanges = ['day', 'week', 'month', 'year', 'all measurements'];
    const [timeRange, setTimeRange] = React.useState(0);
    const handleTimeChange = (
        event: React.SyntheticEvent,
        newValue: number,
    ) => {
        setTimeRange(newValue);
    };

    return (
        <Container maxWidth='xl'>
            <Tabs value={timeRange} onChange={handleTimeChange} centered>
                {timeRanges.map((tm) => (
                    <Tab label={tm} />
                ))}
            </Tabs>
        </Container>
    );
};
