import React, { Component } from 'react'
import FamilyImage from './images/family.jpg'
import GoogleAutocomplete from './GoogleAutocomplete'
import { makeStyles } from '@material-ui/core/styles';
import './HomePage.css'


const search_container = {
  backgroundImage: `url("${FamilyImage}")`,
  height: '92vh',
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.handlePlaceholder('Find an apartment or house for rent')
  }
  render() {
    return (
      <>
        <main className="wrapper">
          <section className="section parallax bg3">
            <div style={{ height: '45vh' }} />
            <div className="search_bar">
              <GoogleAutocomplete
                placeholder={this.props.placeholder}
                handleSelect={this.props.handleSelect}
                handleChange={this.props.handleChange}
                address={this.props.address}
              />
            </div>
          </section>
          <section className="section static">
            <h1>Quality Listings</h1>
          </section>
          <section className="section_home_img parallax bg1">
          </section>
          <section className="section static">
            <h1>Real Time Alerts</h1>
          </section>
          <section className="section_home_img parallax bg2">
          </section>
          <section className="section static">
            <h1>Hello</h1>
          </section>
        </main>

      </>
    );
  }
}
export default HomePage;