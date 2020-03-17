import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import HomeImage from './images/home3.jpg'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


const useStyles = makeStyles(theme => ({
  // root: {
  //   height: '92vh',
  // },
  image: {
    height: '92vh',
    backgroundImage: `url(${HomeImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    paddingTop: '4vh',
    marginBottom: '0 auto',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#0D3606',
    margin: '0 auto',
  },
  form: {
    margin: '0 auto',
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    justifyContent: 'center',
    alignItems: 'center'
  },
}));

function ContactUsPage(props) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.image} >
      <CssBaseline />
      <Grid item xs={0} sm={2} md={3} />
      <Grid item xs={12} sm={8} md={6} justify="center" component={Paper} elevation={10} className={classes.paper}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            Contact Us
          </Typography>
          <form className={classes.form} >
            <>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Your Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="phone"
                type="number"
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="subject"
                label="Subject"
                name="subject"
                autoComplete="subject"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="body"
                label="Type your message here..."
                type="body"
                id="body"
                multiline
                rows="5"
              />
            </>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >Submit</Button>
          </form>
        </div>

      </Grid>
      <Grid item xs={0} sm={2} md={3} />
    </Grid>
  )
}
export default ContactUsPage;
