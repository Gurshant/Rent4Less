import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import icon from '../marker.svg';

import StarIcon from '@material-ui/icons/Star';
import HomeIcon from '@material-ui/icons/Home';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import PetsIcon from '@material-ui/icons/Pets';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import FireplaceIcon from '@material-ui/icons/Fireplace';
import WifiIcon from '@material-ui/icons/Wifi';
import DeckIcon from '@material-ui/icons/Deck';
import ExploreIcon from '@material-ui/icons/Explore';


import { Map, TileLayer, Marker, Popup, Leaflet } from "react-leaflet";
import L from 'leaflet'


import './HomePage.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#F7F8F9',
    padding: theme.spacing(0, 4),
  },
}));

export default function ListingDetailNav(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let marker = new L.Icon({
    iconUrl: icon,
    iconSize: [38, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  })
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
        >
          <Tab icon={<StarIcon />} label="HIGHLIGHTS" />
          <Tab icon={<WifiIcon />} label="AMENITIES" />
          <Tab icon={<ExploreIcon />} label="COMMUNITY" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography component="h1" variant='h4' align='left'>
          Description
        </Typography>
        <Typography component="h1" variant='h6' align="left" align='left' className='grey_text'>
          Beautiful Property
          {props.description}
          <br />
          <br />
        </Typography>

        <Typography component="h1" variant='h4' align='left'>
          Property Details
        </Typography>
        <Typography component="h1" variant='h6' align="left" className='grey_text'>
          <div ><HotelIcon className='icon' /> Bedrooms: {props.bedroom} </div>
          <div ><BathtubIcon className='icon' /> Bathrooms: {props.bathroom} </div>
          <div ><SquareFootIcon className='icon' /> Sqft: {props.sqft} </div>
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography component="h1" variant='h5' align="left" className=' flex_amenities'>
          <Grid container>
            {props.ac ? <Grid item component="section" xs={12} sm={6} md={4}><AcUnitIcon className='icon' /> Air Conditioning </Grid> : null}
            {props.pet_friendly ? <Grid item component="section" xs={12} sm={6} md={4}  ><PetsIcon className='icon' /> Pet Friendly</Grid> : null}
            {props.parking ? <Grid item component="section" xs={12} sm={6} md={4}  ><DirectionsCarIcon className='icon' /> Parking</Grid> : null}
            {props.gym ? <Grid item component="section" xs={12} sm={6} md={4}  ><FitnessCenterIcon className='icon' /> Gym</Grid> : null}
            {props.laundromat ? <Grid item component="section" xs={12} sm={6} md={4}  ><LocalLaundryServiceIcon className='icon' /> Laundromat</Grid> : null}
            {props.deck ? <Grid item component="section" xs={12} sm={6} md={4}  ><DeckIcon className='icon' /> Deck</Grid> : null}
            {props.fireplace ? <Grid item component="section" xs={12} sm={6} md={4}  ><FireplaceIcon className='icon' /> Fireplace</Grid> : null}
            {props.smoking ? <Grid item component="section" xs={12} sm={6} md={4}  ><SmokingRoomsIcon className='icon' /> Smoking</Grid> : null}
          </Grid>
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Map center={[props.latitude, props.longitude]} zoom={15} style={{ height: "500px", width: '100%' }}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[props.latitude, props.longitude]} key={props.id} icon={marker} >
          </Marker>
          )}
        </Map>
      </TabPanel>
    </div>
  );
}