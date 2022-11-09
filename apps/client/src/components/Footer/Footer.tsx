import {
    Box,
    Container,
    Link,
    Toolbar,
    Typography,
    useTheme,
} from '@mui/material';
import { useLocation } from 'react-router-dom';

export const Footer = () => {
    const theme = useTheme();
    const location = useLocation();
    console.log(location.pathname);
    return (
        <Box
            style={
                location.pathname === '/'
                    ? {
                          position: 'absolute',
                          bottom: '0',
                          left: '0',
                          right: '0',
                      }
                    : {}
            }
            sx={{
                backgroundColor: theme.palette.primary.main,
            }}
        >
            <Container maxWidth='xl'>
                <Toolbar disableGutters sx={{ width: '100%' }}>
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
        </Box>
    );
};
