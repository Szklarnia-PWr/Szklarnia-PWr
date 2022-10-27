import {
    Box,
    Container,
    Link,
    Toolbar,
    Typography,
    useTheme,
} from '@mui/material';

export const Footer = () => {
    const theme = useTheme();
    return (
        <Container
            maxWidth='xl'
            sx={{
                position: 'absolute',
                bottom: '0',
                backgroundColor: theme.palette.primary.main,
            }}
        >
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
                        color: 'white',
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
                        Maciej
                    </Link>
                    <Link
                        color='inherit'
                        target='_blank'
                        href='https://github.com/JakubZojdzik'
                        rel='noreferrer'
                    >
                        Jakub
                    </Link>
                </Box>
            </Toolbar>
        </Container>
    );
};
