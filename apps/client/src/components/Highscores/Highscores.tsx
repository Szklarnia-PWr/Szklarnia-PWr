import {
    Battery4BarOutlined,
    Compress,
    DeviceThermostatOutlined,
    WaterOutlined,
} from '@mui/icons-material';
import { Container, Grid, Paper } from '@mui/material';

import './Highscores.css';

export const Highscores = () => {
    return (
        <Container sx={{ textAlign: 'center' }}>
            <h2>Max</h2>
            <Grid
                direction='column'
                alignItems='center'
                justifyContent='center'
                container
                spacing={3}
            >
                <Grid item xs={6}>
                    <Grid
                        sx={{ marginBottom: '4rem' }}
                        container
                        rowSpacing={4}
                        columnSpacing={{ xs: 1, sm: 3, md: 4 }}
                    >
                        <Grid item xs={6}>
                            <Paper className='tile' elevation={3}>
                                <Grid container>
                                    <Grid xs={2}>
                                        <DeviceThermostatOutlined />
                                    </Grid>
                                    <Grid xs={10}>
                                        <h1>15</h1>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className='tile' elevation={3}>
                                <WaterOutlined />
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className='tile' elevation={3}>
                                <Compress />
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className='tile' elevation={3}>
                                <Battery4BarOutlined />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <h2>Min</h2>
            <Grid
                container
                rowSpacing={4}
                columnSpacing={{ xs: 1, sm: 3, md: 4 }}
            >
                <Grid item xs={6}>
                    <Paper className='tile' elevation={3}>
                        <DeviceThermostatOutlined />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className='tile' elevation={3}>
                        <WaterOutlined />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className='tile' elevation={3}>
                        <Compress />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className='tile' elevation={3}>
                        <Battery4BarOutlined />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};
