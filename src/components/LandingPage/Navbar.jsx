import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "../../stylesheets/LandingPage/Navbar.css"
const Navbar = () => {
    return (
        <div className="Navbar" position="static">
            <AppBar position="static" style={{background:"#E5E5E5", color:"black", textAlign:"center"}} elevation='0'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <h1>VistaarX</h1>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
        </div>

    )
}

export default Navbar
