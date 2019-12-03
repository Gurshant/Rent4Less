import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { User, Session } from "../requests";

import NavBar from "./NavBar";
import SignInPage from "./SignInPage";
import { SignUpPage } from "./SignUpPage";

import ListingShowPage from "./ListingShowPage";
import ListingNewPage from "./ListingNewPage";
import MapShowPage from "./MapShowPage";
import AuthRoute from "./AuthRoute";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loading: true,
      google: null
    };
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
      // We need to wrap all component that are imported from
      // 'react-router-dom' inside of a 'Router' component
      // in this case, we are using 'BrowerRouter'
      // What this does, is allow all descendants of the
      // 'BrowserRouter' to use any and all components that
      // come with 'react-router-dom'
      <BrowserRouter>
        <div className="ui container App">
          <NavBar currentUser={currentUser} onSignOut={this.signOut} />
          <Switch>
            <Route
              exact
              path="/sign_up"
              render={routeProps => (
                <SignUpPage {...routeProps} onSignUp={this.getUser} />
              )}
            />
            <Route
              path="/sign_in"
              render={routeProps => (
                <SignInPage {...routeProps} onSignIn={this.getUser} />
              )}
            />
            <AuthRoute
              isAuthenticated={currentUser}
              path="/listings/new"
              component={ListingNewPage}
            />
            <Route
              exact
              path="/listings"
              render={routeProps => (
                <MapShowPage {...routeProps} />
              )}
            />
            <Route path="/listings/:id" component={ListingShowPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// module.exports = App;
export default App;
