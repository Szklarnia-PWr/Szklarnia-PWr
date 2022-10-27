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
        <AppBar sx={{ position: 'static', display: 'block' }}>
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
                            aria-label='menu'
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
                            <NavLink
                                style={{
                                    color: theme.palette.primary.main,
                                }}
                                to={{
                                    pathname: '/',
                                }}
                            >
                                <MenuItem
                                    key='Home'
                                    onClick={handleCloseNavMenu}
                                >
                                    Home
                                </MenuItem>
                            </NavLink>
                            <NavLink
                                style={{
                                    color: theme.palette.primary.main,
                                }}
                                to={{
                                    pathname: '/statistics',
                                }}
                            >
                                <MenuItem
                                    key='Statistics'
                                    onClick={handleCloseNavMenu}
                                >
                                    Statistics
                                </MenuItem>
                            </NavLink>
                            <MenuItem key='Donate' onClick={handleCloseNavMenu}>
                                <a
                                    style={{
                                        color: theme.palette.primary.main,
                                    }}
                                    target='__blank'
                                    href='https://www.gentoo.org/donate/'
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
                        <NavLink
                            style={{ color: 'white' }}
                            to={{
                                pathname: '/',
                            }}
                        >
                            <Button
                                key='Home'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block', color: 'white' }}
                            >
                                Home
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ color: 'white' }}
                            to={{
                                pathname: '/statistics',
                            }}
                        >
                            <Button
                                key={'Statistics'}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block', color: 'white' }}
                            >
                                Statistics
                            </Button>
                        </NavLink>
                        <a
                            style={{ color: 'white' }}
                            target='__blank'
                            href='https://www.gentoo.org/donate/'
                        >
                            <Button
                                key={'Donate'}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block', color: 'white' }}
                            >
                                Donate
                            </Button>
                        </a>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
