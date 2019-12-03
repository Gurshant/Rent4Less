import React, { Component } from "react";
import { Listing } from "../requests";
import ListingNewForm from "./ListingNewForm";
import GoogleAutocomplete from "./GoogleAutocomplete";
import { geocodeByAddress } from 'react-places-autocomplete';




export default class ListingNewPage extends Component {
  state = {
    errors: [],
    address: ''
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

  handleSearchSelect(address) {
    this.handleSearchChange(address);
    geocodeByAddress(address)
      .then(results => console.log(results))
  };
  render() {
    return (
      <>
        <GoogleAutocomplete
          handleSelect={address => this.handleSearchSelect(address)}
          handleChange={address => this.handleSearchChange(address)}
          address={this.state.address}
        />
        <div className="header">New Listing</div>
        <ListingNewForm onSubmit={this.createListing} errors={this.state.errors} />
      </>
    );
  }
}
