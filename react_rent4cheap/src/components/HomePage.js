import React from 'react'
import FamilyImage from './images/family.jpg'
import { makeStyles } from '@material-ui/core/styles';


function HomePage(props) {
  const useStyles = makeStyles(theme => ({
    fullscreen_image: {
      height: '94vh',
      width: '100%'
    },
    toolbar: {
      justifyContent: 'space-between',
    },
  }));
  const classes = useStyles();

  return (
    <img src={FamilyImage} className={classes.fullscreen_image} />
  );
}
export default HomePage;