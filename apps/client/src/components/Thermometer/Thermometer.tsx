import { Box, Typography } from '@mui/material';

export const Thermometer = () => {
    const tempVal = 42;
    const humVal = 74;
    const pressVal = 42;
    return (
        // <Box
        //     p={{ xs: '40px', md: '45px' }}
        //     sx={{
        //         position: 'absolute',
        //         top: '50%',
        //         left: '50%',
        //         transform: 'translate(-50%, -50%)',
        //         border: 3,
        //         borderColor: 'primary.main',
        //         borderRadius: '16px',
        //         textAlign: 'center',
        //         minWidth: '12rem',
        //     }}
        // >
        <Box
            sx={{
                width: '100%',
                height: 'calc(100vh-56px)',
                justifyContent: 'center',
            }}
        >
            <Box
                p={{ xs: '40px', md: '45px' }}
                sx={{
                    border: 3,
                    borderColor: 'primary.main',
                    borderRadius: '16px',
                    textAlign: 'center',
                    minWidth: '12rem',
                    maxWidth: '20rem',
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
                    marginTop='-.6rem'
                    fontSize={{ xs: '1.5em', md: '2em' }}
                >
                    humidity: {humVal}%<br />
                    pressure: {pressVal}hPa
                </Typography>
                <Typography
                    variant='h5'
                    component='h5'
                    color='#666'
                    paddingTop='1rem'
                    fontSize={{ xs: '1em', md: '1.5em' }}
                >
                    last update: 2min
                </Typography>
            </Box>
        </Box>
    );
};
