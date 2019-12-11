import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import HomeImage from './images/home3.jpg'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: 'data:image/jpeg;base64,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',
  },
  {
    imgPath: ''
  }
  // {
  //   label: 'Bird',
  //   imgPath:
  //     'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  // },
  // {
  //   label: 'Bali, Indonesia',
  //   imgPath:
  //     'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  // },
  // {
  //   label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
  //   imgPath:
  //     'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  // },
  // {
  //   label: 'Goč, Serbia',
  //   imgPath:
  //     'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  // },
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
  },
  img: {
    height: '100%',
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
  },
}));

function MultipleImageHandler() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      {/* <Paper square elevation={0} className={classes.header}>
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={index} className={classes.img}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default MultipleImageHandler;