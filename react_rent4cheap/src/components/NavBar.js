import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';

import { NavLink } from "react-router-dom";



import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

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
  const open = Boolean(anchorEl);
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <div>
          <Button color="inherit" size="large" href="/" > Home</Button>

          <Button color="inherit" size="large" href="/listings">Listings</Button>
        </div>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
        {currentUser ? (
          <span >
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
              <MenuItem onClick={onSignOut}>Log Out</MenuItem>
            </Menu>
          </span>
        ) : (
            <span >
              <Button edge="end" color="inherit" href="http://localhost:3001/sign_up">Sign Up</Button>
              <Button edge="end" color="inherit" href="http://localhost:3001/sign_in">Login</Button>
            </span>
          )
        }

      </Toolbar>
    </AppBar >
  );
}