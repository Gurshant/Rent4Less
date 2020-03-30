import React, { useState } from 'react';

// import GoogleLogin from 'react-google-login';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import { Session } from '../requests';

const useStyles = makeStyles(theme => ({
  root: {
    height: '92vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#0D3606',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Rent4Less
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default function SignInForm(props) {
  const classes = useStyles();
  const [errors, setErrors] = useState([]);

  const createSession = (event) => {
    // debugger
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    Session.create({
      email: fd.get('email'),
      password: fd.get('password')
    }).then(data => {
      if (data.status === 404) {
        setErrors([{ message: "Wrong email or password" }])
      } else {
        setErrors([])
        props.history.push('/');
        if (typeof props.onSignIn === "function") {
          props.onSignIn();
        }
      }
    })
  }
  // const responseGoogle = (response) => {
  //   debugger
  //   console.log("hello")
  //   // console.log(response);
  // }
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      {/* <GoogleLogin
        // redirectUri="http://localhost:3001/sign_in"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      /> */}
      <form className={classes.form} onSubmit={createSession}>
        <>
          <TextField
            error={(errors.length > 0)}
            helperText={(errors.length > 0) ? (errors.map(err => err.message)) : null}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            error={(errors.length > 0)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </>

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >Sign In</Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
                </Link>
          </Grid>
          <Grid item>
            <Link href="/sign_up" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Box mt={5} className='copyright_sign_in'>
          <Copyright />
        </Box>
      </form>
    </div>
  );
}