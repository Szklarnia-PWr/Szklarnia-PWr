import { Box, Typography } from '@mui/material';

export const Thermometer = () => {
    const tempVal = 42;
    const humVal = 74;
    const pressVal = 42;
    return (
        <Box
            p={{ xs: '40px', md: '45px' }}
            sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                border: 3,
                borderColor: 'primary.main',
                borderRadius: '16px',
                textAlign: 'center',
                minWidth: '10rem',
            }}
        >
            <Typography
                variant='h1'
                component='h1'
                fontSize={{ xs: '5em', md: '6em' }}
            >
                {tempVal}°C
            </Typography>
            <Typography
                variant='h4'
                component='h4'
                fontSize={{ xs: '1.5em', md: '2em' }}
            >
                humidity: {humVal}%<br />
                pressure: {pressVal}hPa
            </Typography>
        </Box>
    );
};
