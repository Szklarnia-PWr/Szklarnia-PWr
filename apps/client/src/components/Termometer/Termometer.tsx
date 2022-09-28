import { Box, Typography } from '@mui/material';

export const Termometer = () => {
    const tempVal = 42;
    const humVal = 74;
    const pressVal = 42;
    return (
        <Box
            p={{ xs: '15px', md: '45px' }}
            sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                border: 3,
                borderColor: 'primary.main',
                borderRadius: '16px',
                textAlign: 'center',
            }}
        >
            <Typography variant='h1' component='h1'>
                {tempVal}°C
            </Typography>
            <Typography variant='h4' component='h4'>
                humidity: {humVal}%<br />
                pressure: {pressVal}hPa
            </Typography>
        </Box>
    );
};
