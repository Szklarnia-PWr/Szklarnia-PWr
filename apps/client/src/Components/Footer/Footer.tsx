import {
    AppBar,
    Box,
    Container,
    Link,
    Toolbar,
    Typography,
} from '@mui/material';

export const Footer = () => {
    return (
        <AppBar
            sx={{ display: 'flex', bottom: '0', top: 'calc(100vh - 56px)' }}
        >
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography
                        noWrap
                        component='a'
                        href=''
                        sx={{
                            mr: 2,
                            display: 'flex',
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Szklarnia PWr
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            my: 2,
                            color: 'white',
                        }}
                        justifyContent='flex-end'
                    >
                        Authors:
                        <Link
                            color='inherit'
                            target='_blank'
                            href='https://github.com/PoProstuMieciek'
                            rel='noreferrer'
                            px='10px'
                        >
                            Maciej Opaliński
                        </Link>
                        <Link
                            color='inherit'
                            target='_blank'
                            href='https://github.com/JakubZojdzik'
                            rel='noreferrer'
                        >
                            Jakub Żojdzik
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
