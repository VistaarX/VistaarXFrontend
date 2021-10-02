import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import "../../stylesheets/LandingPage/Navbar.css"
import { Button } from '@material-ui/core'
import SearchIcon from '@mui/icons-material/Search';
const DesktopNavbar = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'absolute',
        left: '253px',
        top: '12px',
        borderRadius: '8px',border:'2px solid black',
        backgroundColor: '#C4C4C4',
        '&:hover': {
          backgroundColor: '#C4C4C5',
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
        padding:'4px'
      }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(0, 1, 0, 1),
          // vertical padding + font size from searchIcon
        //   paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));

      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding:'0px 2px 0px 2px',
        height: '100%',
        pointerEvents: 'none',
        display: 'inline-flex',
        alignItems: 'flex-end',
        justifyContent: 'column',
        color:'grey'
      }));
    return (
        <div className="Navbar" position="static">
            <AppBar position="static" style={{background:"#E5E5E5", color:"black", textAlign:"center"}} elevation='3'>
                <Toolbar style={{display:'flex', justifyContent:'space-between'}}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    
                >
                    <h2>VistaarX</h2>
                </IconButton>
                <Search>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                
                <Button color="inherit" href="/login">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default DesktopNavbar
