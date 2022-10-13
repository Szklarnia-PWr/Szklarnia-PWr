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

interface HighscoresProps {
    timeRange: rangesType;
    highs: Array<HighsType>;
}

export const Highscores = (props: HighscoresProps) => {
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
                            <TableCell
                                sx={{ minWidth: '140px', fontWeight: 'bold' }}
                            >
                                Parameter
                            </TableCell>
                            <TableCell
                                sx={{ minWidth: '140px', fontWeight: 'bold' }}
                                align='right'
                            >
                                Maximal this {props.timeRange}
                            </TableCell>
                            <TableCell
                                sx={{ minWidth: '140px', fontWeight: 'bold' }}
                                align='right'
                            >
                                Minimal this {props.timeRange}
                            </TableCell>
                            <TableCell
                                sx={{ minWidth: '140px', fontWeight: 'bold' }}
                                align='right'
                            >
                                Maximal (ever)
                            </TableCell>
                            <TableCell
                                sx={{ minWidth: '140px', fontWeight: 'bold' }}
                                align='right'
                            >
                                Minimal (ever)
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.highs.map((row) => (
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
