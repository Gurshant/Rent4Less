import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { Map, TileLayer, Marker, Popup, Leaflet } from "react-leaflet";
import L from 'leaflet'
import { Listing } from '../requests'
import marker from '../marker.png'
import FilterForm from './FilterForm'
import GoogleAutocomplete from './GoogleAutocomplete'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


class MapShowPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      isLoading: true,
      center: [49.2827, -123.1207],
      address: ''
    }
    this.filterMarker = this.filterMarker.bind(this)

  }
  filterMarker(params) {
    Listing.all().then(listings => {
      let valid = listings.filter(list => (list.latitude && list.sqft >= params.sqft && list.bedroom >= params.bedroom && list.bathroom >= params.bathroom && (params.price ? list.price <= params.price : true)));
      console.log(valid);
      this.setState({
        listings: valid,
        isLoading: false
      });
    });
  }

  handleSearchChange(address) {
    this.setState({ address })
  }

  handleSearchSelect(address) {
    this.handleSearchChange(address)
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(coords => {
        this.setState({ center: [coords.lat, coords.lng] })
      })
      .catch(error => console.error('Error', error));
  };

  componentDidMount() {
    let params = { sqft: 0, bedroom: 0, bathroom: 0 }
    this.filterMarker(params);
  }

  render() {
    let icon = new L.Icon({
      iconUrl: marker,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    })
    if (this.state.isLoading) {
      return (<p>hello</p>)
    }
    return (
      <div>
        <GoogleAutocomplete
          handleSelect={address => this.handleSearchSelect(address)}
          handleChange={address => this.handleSearchChange(address)}
          address={this.state.address}
        />
        <FilterForm filterMarker={params => this.filterMarker(params)} />
        {/* center map along the search result  */}
        <Map center={this.state.center} zoom={12} style={{ height: "80vh", width: '80%' }}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.listings.map(listing => (
            <Marker position={[listing.latitude, listing.longitude]} key={listing.id} icon={icon} >
              <Popup>
                <h1><a href={`localhost:3001/listings/${listing.id}`}>{listing.address}</a>
                </h1>
              </Popup>
            </Marker>
          ))}
          {/* Listing.all().then((listings) => {
            listings.map((list) => {
              <Marker position={[list.latitude, list.longitude]}>

              </Marker>
            })
          }).catch(err => console.log(err)) */}
        </Map>
      </div >
    );
  }
};

export default MapShowPage;