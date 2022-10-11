import {
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import * as React from 'react';

type rangesType = 'day' | 'week' | 'month' | 'year';

interface HighscoresProps {
    timeRange: rangesType;
}

export const Highscores = ({ timeRange }: HighscoresProps) => {
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
    return (
        <Container
            sx={{
                marginY: '3rem',
                display: { xs: 'none', md: 'block' },
            }}
            maxWidth='xl'
        >
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>
                                Parameter
                            </TableCell>
                            <TableCell
                                sx={{ fontWeight: 'bold' }}
                                align='right'
                            >
                                Maximal this {timeRange}
                            </TableCell>
                            <TableCell
                                sx={{ fontWeight: 'bold' }}
                                align='right'
                            >
                                Minimal this {timeRange}
                            </TableCell>
                            <TableCell
                                sx={{ fontWeight: 'bold' }}
                                align='right'
                            >
                                Maximal (ever)
                            </TableCell>
                            <TableCell
                                sx={{ fontWeight: 'bold' }}
                                align='right'
                            >
                                Minimal (ever)
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {highs.map((row) => (
                            <TableRow
                                key={row.parameter}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component='th' scope='row'>
                                    {row.parameter}
                                </TableCell>
                                <TableCell align='right'>
                                    {row.maxTime}
                                </TableCell>
                                <TableCell align='right'>
                                    {row.maxEver}
                                </TableCell>
                                <TableCell align='right'>
                                    {row.minTime}
                                </TableCell>
                                <TableCell align='right'>
                                    {row.minEver}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};
