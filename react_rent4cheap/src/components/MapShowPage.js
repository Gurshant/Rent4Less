import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup, Leaflet } from "react-leaflet";
import L from 'leaflet'
import { Listing } from '../requests'
import marker from '../marker.svg'
import FilterForm from './FilterForm'
import GoogleAutocomplete from './GoogleAutocomplete'
import HomeImage from './images/home3.jpg'


import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import ProgressSpinner from "./ProgressSpinner";



const useStyles = makeStyles(theme => ({
  root: {
    height: '92vh',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#0D3606',
  },
  card: {
    height: '8em',
    width: '17em'
  },
  icon: {
    height: '1rem',
    width: '1rem',
  },
  image: {
    height: '95%',
    width: '90%'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

function MapShowPage(props) {
  const classes = useStyles();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);


  const filterMarker = (params) => {
    console.log(params);
    Listing.all().then(listings => {
      let valid = listings.filter(list => (list.latitude && list.sqft >= params.sqft && list.bedroom >= params.bedroom && list.bathroom >= params.bathroom && (params.price ? list.price <= params.price : true) && (params.ac ? list.ac : true) && (params.deck ? list.deck : true) && (params.fireplace ? list.fireplace : true) && (params.pet_friendly ? list.pet_friendly : true) && (params.smoking ? list.smoking : true) && (params.parking ? list.parking : true) && (params.gym ? list.gym : true) && (params.laundromat ? list.laundromat : true)));
      setListings(valid)
      setLoading(false)
    });
  }
  // const componentDidMount = () => {
  //   let params = { sqft: 0, bedroom: 0, bathroom: 0 }
  //   filterMarker(params);
  //   props.handlePlaceholder('Search a location or neighborhood')
  // }
  useEffect(() => {
    let params = { sqft: 0, bedroom: 0, bathroom: 0 }
    filterMarker(params);
    props.handlePlaceholder('Center map on a location or neighborhood')
  }, [])
  let icon = new L.Icon({
    iconUrl: marker,
    iconSize: [38, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  })


  if (loading) {
    return (<ProgressSpinner />)
  } else {
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={7} >
          <Map center={props.center} zoom={12} style={{ height: "92vh", width: '100%' }}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {listings.map(listing => (
              <Marker position={[listing.latitude, listing.longitude]} key={listing.id} icon={icon} >
                <Popup>
                  <Grid container component="main" className={classes.card}>
                    <Grid item sm={5} className={classes.popup} >
                      {console.log(listing)}
                      <div className={classes.image}>
                        {/* {loaded ? null : (
                          <Skeleton variant="rect" className={classes.image} />
                        )} */}
                        <img
                          className={classes.image}
                          src={HomeImage}
                        // style={loaded ? {} : { display: 'none' }}
                        // onLoad={() => setLoaded(true)}
                        />
                      </div>
                      {/* <img src={HomeImage} className={classes.image}></img> */}
                    </Grid>
                    <Grid item sm={7} component={Paper} elevation={0} >
                      <Typography component="h1" variant='body1' align="left" >
                        ${listing.price}
                      </Typography>
                      <Link href={`/listings/${listing.id}`}>{listing.address}</Link>
                      <Typography component="h1" variant='body2' align="right" >
                        {listing.bedroom} <HotelIcon className={classes.icon} /> {listing.bathroom} <BathtubIcon className={classes.icon} />
                      </Typography>
                    </Grid>
                  </Grid>
                </Popup>
              </Marker>
            ))}
          </Map>
        </Grid>
        <Grid item xs={false} sm={4} md={5} className='scrollable'>
          <div className='scrollable_child'>
            <div className={classes.paper}>
              <GoogleAutocomplete

                id='hello'
                placeholder={props.placeholder}
                handleSelect={props.handleSelect}
                handleChange={props.handleChange}
                address={props.address}
              /><br />
              <FilterForm

                filterMarker={params => filterMarker(params)}
              />
            </div>
          </div>
        </Grid>
      </Grid >
    );
  }
};

export default MapShowPage;