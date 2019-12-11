import React from 'react'

import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles(theme => ({

  paper: {
    padding: theme.spacing(6, 4),
  },
}));

function ListingHeader(props) {
  const classes = useStyles();

  return (
    <Grid container component={Paper} elevation={6} className={classes.paper}>
      <CssBaseline />
      <Grid item component="section" xs={12} sm={12} md={8}  >
        <Typography component="h1" variant='h4' align="left"  >
          ${props.price}<span className='time grey_text'> - 2 months ago</span>
        </Typography>
        <Typography component="h3" variant='h6' align="left" className='grey_text'>
          {props.street_number} {props.route}, {props.locality} {props.administrative_area_level_1}
        </Typography>
      </Grid>
      <Grid item component="section" xs={12} sm={12} md={4} className='center_vertical'>
        <Typography component="h1" variant='body1' align="right" className='grey_text'>
          <span >{props.bedroom} Bed <HotelIcon className='icon' /> </span>
          <span className='icon_padding'>{props.bathroom} Bath <BathtubIcon className='icon' /> </span>
          <span className='icon_padding'>{props.sqft} Sqft <SquareFootIcon className='icon' /> </span>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default ListingHeader