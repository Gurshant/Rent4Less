import React, { useState, useEffect } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Listing } from '../requests';
import { geocodeByAddress } from 'react-places-autocomplete';
import GoogleAutocomplete from "./GoogleAutocomplete";


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
  input: {
    display: 'none',
  },
}));

// const getBase64 = (file, cb) => {
//   let reader = new FileReader();
// reader.readAsDataURL(file);A

//   reader.onload = function () {
//     cb(reader.result)
//   };
//   reader.onerror = function (error) {
//     console.log('Error: ', error);
//   };
// }

export default function ListingNewForm(props) {
  const classes = useStyles();


  const [errors, setErrors] = useState([]);
  const [file, setFile] = useState({});

  const [address, setAddress] = useState('');
  const [values, setValues] = useState({
    street_number: '',
    route: '',
    locality: '',
    administrative_area_level_1: '',
    country: '',
    postal_code: ''
  });
  // Component did mount
  useEffect(() => {
    props.props.handlePlaceholder('Enter Rental Address Here***')
  }, [])

  const createListing = params => {
    // debugger;
    // Array.prototype.forEach.call(file, function (img) {
    //   console.log(img)
    //   let reader = new FileReader();
    //   reader.readAsDataURL(img)
    //   reader.onload = function () {
    //     // reader.result.push(reader.readAsDataURL(file[i]))
    //     console.log(reader.result)
    //     // result.push(reader.result)
    //     if (params.image.length != file.length) {
    //       params.image.push(reader.result)
    //       params.image = [];
    //       debugger;
    //     }
    //   }
    // });

    // debugger;
    console.log(params)
    Listing.create(params).then(listing => {
      // debugger;
      if (listing.errors) {
        setErrors([listing.errors])
      } else {
        props.props.history.push(`/listings/${listing.id}`);
      }
    });
  };

  const handleSearchChange = (address) => {
    setAddress(address)
  }
  const handleFile = (event) => {
    const { target } = event;
    setFile(target.files)
  }

  const usableAddressParams = ['street_number', 'route', 'locality', 'administrative_area_level_1', 'country', 'postal_code']

  const handleSearchSelect = (address) => {
    handleSearchChange(address);
    setValues({
      street_number: '',
      route: '',
      locality: '',
      administrative_area_level_1: '',
      country: '',
      postal_code: ''
    })

    geocodeByAddress(address).then(results => results[0].address_components.map(component => {
      if (usableAddressParams.includes(component.types[0])) {
        let pair = { [component.types[0]]: component.long_name };
        setValues(prevState => ({ ...prevState, ...pair }))
      }
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);
    createListing(fd)
  }
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <HomeOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h4">
        New Listing
      </Typography>

      <Typography component="h1" variant="h5" align="left" className={classes.form}>
        Address
      </Typography>
      <GoogleAutocomplete
        placeholder={props.props.placeholder}
        handleSelect={address => handleSearchSelect(address)}
        handleChange={address => handleSearchChange(address)}
        address={address}
      />
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          error={!errors.filter(err => err['field'] === 'street_number').length === 0}
          helperText={errors.filter(err => err['field'] === 'street_number').map(err => err.message) || null}
          type="number"
          value={values.street_number}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="street_number"
          label="Street Number"
          name="street_number"
          autoComplete="street_number"
        />
        <TextField
          error={!errors.filter(err => err['field'] === 'route').length === 0}
          helperText={errors.filter(err => err['field'] === 'route').map(err => err.message) || null}
          value={values.route}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="route"
          label="Street"
          name="route"
          autoComplete="route"
        />
        <TextField
          error={!errors.filter(err => err['field'] === 'locality').length === 0}
          helperText={errors.filter(err => err['field'] === 'locality').map(err => err.message) || null}
          value={values.locality}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="locality"
          label="City"
          name="locality"
          autoComplete="locality"
        />
        <TextField
          error={!errors.filter(err => err['field'] === 'administrative_area_level_1').length === 0}
          helperText={errors.filter(err => err['field'] === 'administrative_area_level_1').map(err => err.message) || null}
          value={values.administrative_area_level_1}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="administrative_area_level_1"
          label="Province"
          name="administrative_area_level_1"
          autoComplete="administrative_area_level_1"
        />
        <TextField
          error={!errors.filter(err => err['field'] === 'country').length === 0}
          helperText={errors.filter(err => err['field'] === 'country').map(err => err.message) || null}
          value={values.country}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="country"
          label="Country"
          name="country"
          autoComplete="country"
        />
        <TextField
          error={!errors.filter(err => err['field'] === 'postal_code').length === 0}
          helperText={errors.filter(err => err['field'] === 'postal_code').map(err => err.message) || null}
          value={values.postal_code}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="postal_code"
          label="Postal code"
          name="postal_code"
          autoComplete="postal_code"
        />

        <Typography component="h1" variant="h5" align="left">
          Listing Details
        </Typography>
        <TextField
          error={!errors.filter(err => err['field'] === 'price').length === 0}
          helperText={errors.filter(err => err['field'] === 'price').map(err => err.message) || null}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="price"
          label="Price"
          name="price"
          type="number"
        />
        <TextField
          error={!errors.filter(err => err['field'] === 'sqft').length === 0}
          helperText={errors.filter(err => err['field'] === 'sqft').map(err => err.message) || null}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="sqft"
          label="Sqft"
          name="sqft"
          type="number"
        />
        <TextField
          error={!errors.filter(err => err['field'] === 'bedroom').length === 0}
          helperText={errors.filter(err => err['field'] === 'bedroom').map(err => err.message) || null}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="bedroom"
          label="Bedroom"
          name="bedroom"
          type="number"
        />
        <TextField
          error={!errors.filter(err => err['field'] === 'bathroom').length === 0}
          helperText={errors.filter(err => err['field'] === 'bathroom').map(err => err.message) || null}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="bathroom"
          label="Bathroom"
          name="bathroom"
          type="number"
        />
        <TextField
          error={!errors.filter(err => err['field'] === 'description').length === 0}
          helperText={errors.filter(err => err['field'] === 'description').map(err => err.message) || null}
          variant="outlined"
          margin="normal"
          fullWidth
          id="description"
          label="Description"
          name="description"
          multiline
          classes={classes.textField}
        />
        <div className='upload_img'>
          <input
            onChange={handleFile}
            name='images'
            accept="image/*"
            // className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          {/* <label htmlFor="contained-button-file">
            <Button
              variant="outlined"
              size="large"
              color="primary"
              component='span'
              className="button_in_parallax "
            >Upload Images
          </Button>
          </label> */}
        </div>

        <Typography component="h1" variant="h5" align="left">
          Amenities
        </Typography>

        <ul className="checkboxes_filter">
          <li>
            <FormControlLabel
              control={<Checkbox value={true} color="primary" name="pet_friendly" />}
              label="Pet Friendly"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox value={true} color="primary" name="smoking" />}
              label="Smoking"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox value={true} color="primary" name="parking" />}
              label="Parking"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox value={true} color="primary" name="gym" />}
              label="Gym"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox value={true} color="primary" name="laundromat" />}
              label="Laundromat"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox value={true} color="primary" name="fireplace" />}
              label="Fireplace"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox value={true} color="primary" name="deck" />}
              label="Deck"
            />
          </li>
          <li>
            <FormControlLabel
              control={<Checkbox value={true} color="primary" name="ac" />}
              label="AC"
            />
          </li>
        </ul>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >Create Listing</Button>
      </form >
    </div >
  );
}