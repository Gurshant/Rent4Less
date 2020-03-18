import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from './images/logo.png'

import './App.css'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '8vh'
  },
  toolbar: {
    justifyContent: 'space-between',
    height: '8vh'
  },

}));

export default function NavBar(props) {
  const { currentUser, onSignOut } = props;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const listingLink = () => {

  }
  const open = Boolean(anchorEl);
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <div>
          <a className='logo_text' href="/" > Rent <img src={logo} className="logo" />  Less</a>
        </div>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
        {currentUser ? (
          <span >
            <Button edge="end" variant="outlined" size="large" color="primary" className="button navbar_buttons" href="/listings">Find a Home</Button>

            <Button edge="end" variant="outlined" size="large" color="primary" className="button navbar_buttons" href="/contact_us">Contact Us</Button>

            <Button edge="end" variant="outlined" size="large" color="primary" className="button navbar_buttons" href="/#">My Rentals</Button>

            <Button edge="end" variant="outlined" size="large" color="primary" className="button navbar_buttons" href="/listings/new">New Rental</Button>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My Listings</MenuItem>
              <MenuItem onClick={onSignOut}>Log Out</MenuItem>
            </Menu>
          </span>
        ) : (
            <span >
              <Button edge="end" variant="outlined" size="large" color="primary" className="button navbar_buttons" href="/listings">Find a Home</Button>
              <Button edge="end" variant="outlined" size="large" color="primary" className="button navbar_buttons" href="/contact_us">Contact Us</Button>
              <Button edge="end" variant="outlined" size="large" color="primary" className="button navbar_buttons" href="/sign_up">Sign Up</Button>
              <Button edge="end" variant="outlined" size="large" color="primary" className="button navbar_buttons" href="/sign_in">Login</Button>
            </span>
          )
        }

      </Toolbar>
    </AppBar >
  );
}