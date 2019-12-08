import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
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
    backgroundColor: theme.palette.secondary.main,
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
    debugger
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
        props.props.history.push('/');
        if (typeof props.props.onSignIn === "function") {
          props.props.onSignIn();
        }
      }
    })
  }
  return (
    <Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
          </Typography>
        <form className={classes.form} onSubmit={createSession}>
          {errors.length > 0 ? (
            <>
              <TextField
                className="sign_up"
                error
                variant="outlined"
                margin="normal"
                required
                fullWidth
                // id="outlined-error-helper-text"
                id="email"
                name="email"
                label="Email Address"
                helperText={errors.map(err => err.message)}
                autoComplete="email"
                autoFocus
              />
              <TextField
                error
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
          ) : <>
              <TextField
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
          }
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
          <Box mt={5}>
            <Copyright />
          </Box>
        </form>
      </div>
    </Grid>
  );
}