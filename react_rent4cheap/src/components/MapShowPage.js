import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup, Leaflet } from "react-leaflet";
import L from 'leaflet'
import { Listing } from '../requests'
import marker from '../marker.png'
import FilterForm from './FilterForm'
import GoogleAutocomplete from './GoogleAutocomplete'



class MapShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      isLoading: true,
    }
    this.filterMarker = this.filterMarker.bind(this)
  }
  filterMarker(params) {
    Listing.all().then(listings => {
      let valid = listings.filter(list => (list.latitude && list.sqft >= params.sqft && list.bedroom >= params.bedroom && list.bathroom >= params.bathroom && (params.price ? list.price <= params.price : true)));
      this.setState({
        listings: valid,
        isLoading: false
      });
    });
  }
  componentDidMount() {
    let params = { sqft: 0, bedroom: 0, bathroom: 0 }
    this.filterMarker(params);
    this.props.handlePlaceholder('Search a location or neighborhood')
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
          placeholder={this.props.placeholder}
          handleSelect={this.props.handleSelect}
          handleChange={this.props.handleChange}
          address={this.props.address}
        />
        <FilterForm filterMarker={params => this.filterMarker(params)} />
        {/* center map along the search result  */}
        <Map center={this.props.center} zoom={12} style={{ height: "80vh", width: '80%' }}>
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
        </Map>
      </div >
    );
  }
};

export default MapShowPage;