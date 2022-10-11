import { Container, Tab, Tabs } from '@mui/material';
import React from 'react';

type rangesType = 'day' | 'week' | 'month' | 'year';

interface SwitchProps {
    timeRange: rangesType;
    setRange: (a: rangesType) => void;
}

const timeRanges: rangesType[] = ['day', 'week', 'month', 'year'];
const rangeToIndex = { day: 0, week: 1, month: 2, year: 3 };

export const TimeSwitch = ({ timeRange, setRange }: SwitchProps) => {
    const handleTimeChange = (
        event: React.SyntheticEvent,
        newValue: number,
    ) => {
        setRange(timeRanges[newValue]);
    };

    return (
        <Container maxWidth='xl'>
            <Tabs
                value={rangeToIndex[timeRange]}
                onChange={handleTimeChange}
                centered
            >
                {timeRanges.map((tm: rangesType) => (
                    <Tab label={tm} />
                ))}
            </Tabs>
        </Container>
    );
};
