import React from 'react'
import { Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import SignInPage from "./SignInPage";
import SignInPageMaterialUI from "./SignInPageMaterialUI";

import SignUpPage from "./SignUpPage";
import ListingShowPage from "./ListingShowPage";
import ListingNewPage from "./ListingNewPage";
import MapShowPage from "./MapShowPage";
import AuthRoute from "./AuthRoute";
import HomePage from "./HomePage";

import { User, Session } from "../requests";

import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import './HomePage.css'


class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loading: true,
      google: null,
      address: '',
      center: [49.2827, -123.1207],
      placeholder: 'Find an apartment or house for rent'
    };
    this.handleSearchSelect = this.handleSearchSelect.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }
  handleSearchChange(address) {
    this.setState({ address });
  }

  handleSearchSelect(address) {
    this.handleSearchChange(address)
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(coords => {
        this.setState({ center: [coords.lat, coords.lng] });
        // debugger;
        // return <Redirect to="/listings" />
        this.props.history.push('/listings')
      })
      .catch(error => console.error('Error', error));
  };
  handleGooglePlaceholder(string) {
    this.setState({ placeholder: string })
  }

  signOut = () => {
    Session.destroy().then(() => {
      this.setState({ currentUser: null });
    });
  };

  getUser = () => {
    User.current()
      .then(data => {
        if (typeof data.id !== "number") {
          this.setState({ loading: false });
        } else {
          this.setState({ loading: false, currentUser: data });
        }
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };


  componentDidMount() {
    this.getUser();
  }

  render() {
    const { loading, currentUser } = this.state;
    if (loading) {
      return <div />;
    }
    return (
      <div className="ui App">

        <Switch>
          {/* <Redirect from='/' to='/listings' /> */}
          <Route exact path="/" render={routeProps => (
            <HomePage
              currentUser={this.state.currentUser}
              onSignOut={this.signOut}

              {...routeProps}
              handlePlaceholder={string => this.handleGooglePlaceholder(string)}
              placeholder={this.state.placeholder}
              handleSelect={address => this.handleSearchSelect(address)}
              handleChange={address => this.handleSearchChange(address)}
              address={this.state.address}
            />)}
          />
          <Route exact path="/sign_up" render={routeProps => (
            <>
              <NavBar currentUser={currentUser} onSignOut={this.signOut} />
              <SignUpPage {...routeProps} onSignUp={this.getUser} />
            </>)}
          />
          <Route exact path="/sign_in" render={routeProps => (
            <>
              <NavBar currentUser={currentUser} onSignOut={this.signOut} />
              <SignInPage {...routeProps} onSignIn={this.getUser} />
            </>)}
          />

          <Route exact path="/sign_in/material" render={routeProps => (
            <>
              <NavBar currentUser={currentUser} onSignOut={this.signOut} />
              <SignInPageMaterialUI {...routeProps} onSignIn={this.getUser} />
            </>)}
          />
          <AuthRoute isAuthenticated={currentUser} path="/listings/new"
            render={(restProps) => (
              <>
                <NavBar currentUser={currentUser} onSignOut={this.signOut} />
                <ListingNewPage
                  {...restProps}
                  handlePlaceholder={string => this.handleGooglePlaceholder(string)}
                  placeholder={this.state.placeholder}
                />
              </>)}
          />
          <Route exact path="/listings" render={routeProps => (
            <>
              <NavBar currentUser={currentUser} onSignOut={this.signOut} />
              <MapShowPage
                {...routeProps}
                handlePlaceholder={string => this.handleGooglePlaceholder(string)}
                placeholder={this.state.placeholder}
                handleSelect={address => this.handleSearchSelect(address)}
                handleChange={address => this.handleSearchChange(address)}
                address={this.state.address}
                center={this.state.center}
              />
            </>)}
          />
          <Route path="/listings/:id" render={routeProps => (
            <>
              <NavBar currentUser={currentUser} onSignOut={this.signOut} />
              <ListingShowPage />
            </>)}
          />
        </Switch>
      </div>
    )
  }
}

export default Router;