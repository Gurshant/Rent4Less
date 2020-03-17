import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import HomeImage from './images/home3.jpg'


const useStyles = makeStyles(theme => ({
  root: {
    height: '92vh',
  },
  image: {
    backgroundImage: `url(${HomeImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));

function ContactUsPage(props) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={2} md={4} className={classes.image} />
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        hello
        </Grid>
      <Grid item xs={false} sm={2} md={4} className={classes.image} />
    </Grid>
  )
}
export default ContactUsPage;
