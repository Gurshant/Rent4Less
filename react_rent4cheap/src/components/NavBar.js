import React from 'react';
import { useMediaQuery } from 'react-responsive'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from './images/logo.png'
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
import CreateIcon from '@material-ui/icons/Create';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import Fade from '@material-ui/core/Fade';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  rootDesktop: {
    flexGrow: 1,
    height: '8vh'
  },
  toolbar: {
    justifyContent: 'space-between',
    height: '8vh',
  },
  root: {
    marginBottom: '8vh',
    display: 'flex',
  },
  appBar: {
    height: '8vh',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarButtons: {
    height: 'inherit'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },


}));

export default function NavBar(props) {
  const { currentUser, onSignOut } = props;
  const isMobile = useMediaQuery({ query: '(max-width: 830px)' })
  const isDesktop = useMediaQuery({ query: '(min-width: 831px)' })

  const classes = useStyles();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openDesktopMenu = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // mobile
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      {isMobile && <>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar className={classes.appBarButtons}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <a className='logo_text' href="/" > Rent <img src={logo} className="logo" />  Less</a>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem button component={Link} href="/listings">
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary={"Find a Home"} />
              </ListItem>
              <ListItem button component={Link} href="/contact_us">
                <ListItemIcon><PhoneIcon /></ListItemIcon>
                <ListItemText primary={"Contact Us"} />
              </ListItem>

            </List>
            <Divider />
            <List>
              {currentUser ? (
                <>
                  <ListItem button >
                    <ListItemIcon>< HomeIcon /></ListItemIcon>
                    <ListItemText primary={"My Listings"} />
                  </ListItem>
                  <ListItem button component={Link} href="/listings/new">
                    <ListItemIcon><AddIcon /></ListItemIcon>
                    <ListItemText primary={"Upload Listing"} />
                  </ListItem>
                  <ListItem button onClick={onSignOut}>
                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                    <ListItemText primary={"Logout"} />
                  </ListItem>
                </>
              ) : (
                  <>
                    <ListItem button component={Link} href="/sign_in">
                      <ListItemIcon><VpnKeyIcon /></ListItemIcon>
                      <ListItemText primary={"Sign In"} />
                    </ListItem>
                    <ListItem button component={Link} href="/sign_up">
                      <ListItemIcon><CreateIcon /></ListItemIcon>
                      <ListItemText primary={"Sign Up"} />
                    </ListItem>
                  </>
                )}
            </List>
          </Drawer>
        </div>
      </>}
      {
        isDesktop &&
        < AppBar position="static" className={classes.rootDesktop} >
          <Toolbar className={classes.toolbar}>
            <div>
              <a className='logo_text' href="/" > Rent <img src={logo} className="logo" />  Less</a>
            </div>
            {currentUser ? (
              <span >
                <Button edge="end" variant="outlined" size="large" color="primary" className="button navbar_buttons" href="/listings">Find a Home</Button>

                <Button edge="end" variant="outlined" size="large" color="primary" className="button navbar_buttons" href="/contact_us">Contact Us</Button>

                <Button edge="end" variant="outlined" size="large" color="primary" className="button navbar_buttons" href="/listings/new">Upload Listing</Button>
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
                  open={openDesktopMenu}
                  TransitionComponent={Fade}
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
      }

    </>
  );
}