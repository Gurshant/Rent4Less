import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import HomeImage from './images/home3.jpg'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'


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



export default function SignInPageMaterialUI(props) {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={5} md={7} className={classes.image} />
      {props.history.location.pathname === "/sign_in/material" ? (
        <SignInForm props={props} />
      ) :
        <SignUpForm props={props} />
      }
    </Grid>
  );
}
