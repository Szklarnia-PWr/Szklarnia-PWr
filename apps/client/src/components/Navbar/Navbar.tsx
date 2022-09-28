import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
// import { NavLink } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const theme = useTheme();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null,
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography
                        variant='h6'
                        noWrap
                        component='a'
                        href='/'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
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
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem key='Home' onClick={handleCloseNavMenu}>
                                <NavLink
                                    style={{
                                        color: theme.palette.primary.main,
                                    }}
                                    to={{
                                        pathname: '/',
                                    }}
                                >
                                    Home
                                </NavLink>
                            </MenuItem>
                            <MenuItem
                                key='Statistics'
                                onClick={handleCloseNavMenu}
                            >
                                <NavLink
                                    style={{
                                        color: theme.palette.primary.main,
                                    }}
                                    to={{
                                        pathname: '/statistics',
                                    }}
                                >
                                    Statistics
                                </NavLink>
                            </MenuItem>
                            <MenuItem key='Donate' onClick={handleCloseNavMenu}>
                                <a
                                    style={{
                                        color: theme.palette.primary.main,
                                    }}
                                    target='__blank'
                                    href='https://liberapay.com/'
                                >
                                    Donate
                                </a>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant='h5'
                        noWrap
                        component='a'
                        href=''
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Szklarnia PWr
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            color: 'white',
                        }}
                        justifyContent='flex-end'
                    >
                        <Button
                            key='Home'
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, display: 'block' }}
                        >
                            <NavLink
                                style={{ color: 'white' }}
                                to={{
                                    pathname: '/',
                                }}
                            >
                                Home
                            </NavLink>
                        </Button>
                        <Button
                            key={'Statistics'}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, display: 'block' }}
                        >
                            <NavLink
                                style={{ color: 'white' }}
                                to={{
                                    pathname: '/statistics',
                                }}
                            >
                                Statistics
                            </NavLink>
                        </Button>
                        <Button
                            key={'Donate'}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, display: 'block' }}
                        >
                            <a
                                style={{ color: 'white' }}
                                target='__blank'
                                href='https://liberapay.com/'
                            >
                                Donate
                            </a>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
