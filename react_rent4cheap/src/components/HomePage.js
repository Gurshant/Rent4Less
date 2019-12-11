import React, { Component } from 'react'
import Contact_Us_img from './images/phone.jpg'
import GoogleAutocomplete from './GoogleAutocomplete'
import Button from '@material-ui/core/Button';
import NavBar from "./NavBar";
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Footer from './Footer'

import { makeStyles } from '@material-ui/core/styles';
import './HomePage.css'


class HomePage extends Component {
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
          <NavBar currentUser={this.props.currentUser} onSignOut={this.props.onSignOut} />

          <section className="section parallax bg3">
            <div className="inner-hero">
              <div className="hero-text">
                <h1>Find your next home.</h1>
                <h2>Search rental homes in Vancouver.</h2>
                <div className="search_bar">
                  <GoogleAutocomplete
                    placeholder={this.props.placeholder}
                    handleSelect={this.props.handleSelect}
                    handleChange={this.props.handleChange}
                    address={this.props.address}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="section static">
            <div className="inner">
              <h1>Real Time Updates</h1>
              <h2>Registering your rental property with Rent4Cheap.ca provides you with unrivaled support from a team that understands how to showcase your rental property online and will provide valuable rental support from our property management experts.</h2>
              <div className="button-container"><Button variant="outlined" size="large" color="primary" className="button_in_parallax" >
                Learn More
            </Button></div>
            </div>
          </section>
          <section className="section_home_img parallax bg1">
          </section>
          <section className="section static">
            <div className="inner">
              <h1>Quality Listings</h1>
              <h2>Registering your rental property with Rent4Cheap.ca provides you with unrivaled support from a team that understands how to showcase your rental property online and will provide valuable rental support from our property management experts.</h2>
              <div className="button-container"><Button variant="outlined" size="large" color="primary" className="button_in_parallax" >
                Sign Up
            </Button></div></div>
          </section>
          <section className="section_home_img parallax bg2" />
          <section className="section static">
            <div className="inner">
              <h1>Quick Support</h1>
              <h2>Registering your rental property with Rent4Cheap.ca provides you with unrivaled support from a team that understands how to showcase your rental property online and will provide valuable rental support from our property management experts.
              </h2>
              <div className="button-container">
                <Button variant="outlined" size="large" color="primary" className="button_in_parallax" >
                  Contact Us
                </Button>
              </div>
            </div>
          </section>
          {/* <section className="section_home_img parallax bg4" /> */}
          <Footer />
        </main>

      </>
    );
  }
}
export default HomePage;