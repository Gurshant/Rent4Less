import React, { Component } from "react";
import { Listing } from "../requests";
import ListingNewForm from "./ListingNewForm";
import GoogleAutocomplete from "./GoogleAutocomplete";
import { geocodeByAddress } from 'react-places-autocomplete';

export default class ListingNewPage extends Component {
  state = {
    errors: [],
    address: '',
    values: {
      street_number: '',
      route: '',
      locality: '',
      administrative_area_level_1: '',
      country: '',
      postal_code: ''
    }
  };
  createListing = params => {
    Listing.create(params).then(listing => {
      if (listing.errors) {
        this.setState({ errors: listing.errors })
      } else {
        this.props.history.push(`/listings/${listing.id}`);
      }
    });
  };
  handleSearchChange(address) {
    this.setState({ address })
  }
  usableAddressParams = ['street_number', 'route', 'locality', 'administrative_area_level_1', 'country', 'postal_code']
  handleSearchSelect(address) {
    this.handleSearchChange(address);
    this.setState({
      values: {
        street_number: '',
        route: '',
        locality: '',
        administrative_area_level_1: '',
        country: '',
        postal_code: ''
      }
    })
    console.log(this.state.values)
    geocodeByAddress(address).then(results => results[0].address_components.map(component => {
      if (this.usableAddressParams.includes(component.types[0])) {
        let pair = { [component.types[0]]: component.long_name };
        this.setState(prevState => ({
          values: { ...prevState.values, ...pair }
        }))
        console.log('state: ', this.state.values)
      }
    }))
  }


  render() {
    return (
      <>
        <GoogleAutocomplete
          handleSelect={address => this.handleSearchSelect(address)}
          handleChange={address => this.handleSearchChange(address)}
          address={this.state.address}
        />
        <div className="header">New Listing</div>
        <ListingNewForm onSubmit={this.createListing} errors={this.state.errors} values={this.state.values} />
      </>
    );
  }
}

