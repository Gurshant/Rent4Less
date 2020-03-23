import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

import { User, Session } from "../requests";


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

export default function SignUpForm(props) {

  const classes = useStyles();
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);
    const signUpParams = {
      first_name: fd.get("first_name"),
      last_name: fd.get("last_name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      password: fd.get("password"),
      password_confirmation: fd.get("password_confirmation")
    };
    createUser(signUpParams);
  }
  const createUser = (signUpParams) => {
    User.create(signUpParams).then(user => {
      if (user.errors) {
        setErrors(user.errors);
      } else {
        Session.create({
          email: signUpParams.email,
          password: signUpParams.password
        }).then(data => {
          setErrors([])
          props.onSignIn();
          props.history.push("/");
        })
      }
    })
  }
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        {errors.filter(err => err['field'] === 'first_name').length === 0 ? (
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="first_name"
            label="First Name"
            name="first_name"
            autoComplete="first_name"
            autoFocus
          />
        ) :
          <TextField
            error
            helperText={errors.filter(err => err['field'] === 'first_name').map(err => err.message)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="first_name"
            label="First Name"
            name="first_name"
            autoComplete="first_name"
            autoFocus
          />
        }
        {errors.filter(err => err['field'] === 'last_name').length === 0 ? (
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="last_name"
            label="Last Name"
            name="last_name"
            autoComplete="last_name"
          />
        ) :
          <TextField
            error
            helperText={errors.filter(err => err['field'] === 'last_name').map(err => err.message)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="last_name"
            label="Last Name"
            name="last_name"
            autoComplete="last_name"
            autoFocus
          />
        }
        {errors.filter(err => err['field'] === 'email').length === 0 ? (
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        ) :
          <TextField
            error
            helperText={errors.filter(err => err['field'] === 'email').map(err => err.message)}
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
        }
        {errors.filter(err => err['field'] === 'phone').length === 0 ? (
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
            autoComplete="phone"
            type="number"
          />
        ) :
          <TextField
            error
            helperText={errors.filter(err => err['field'] === 'phone').map(err => err.message)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
            autoComplete="phone"
            type="number"
            autoFocus
          />
        }
        {errors.filter(err => err['field'] === 'password' || err['field'] === 'password_confirmation').length === 0 ? (
          <>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password_confirmation"
              label="Password Confirmation"
              type="password"
              id="password_confirmation"
            />
          </>
        ) :
          <>
            <TextField
              error
              helperText={errors.filter(err => err['field'] === 'password' || err['field'] === 'password_confirmation').map(err => err.message)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autofocus
            />
            <TextField
              error
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password_confirmation"
              label="Password Confirmation"
              type="password"
              id="password_confirmation"
            />
          </>
        }
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >Sign Up</Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
                </Link>
          </Grid>
          <Grid item>
            <Link href="/sign_in" variant="body2">
              {"Already have an account? Sign In"}
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </form>
    </div>
  );
}