import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  const { currentUser, onSignOut } = props;
  return (
    <div className="ui pointing menu">
      {currentUser ? (
        <>
          <span className="item">Welcome {currentUser.first_name}</span>
          <NavLink to="/sign_out" onClick={onSignOut} className="item">
            Sign Out
          </NavLink>
        </>
      ) : (
          <React.Fragment>
            <NavLink exact to="/sign_in" className="item">
              Sign In
          </NavLink>
            <NavLink exact to="/sign_up" className="item">
              Sign Up
          </NavLink>
          </React.Fragment>
        )}
    </div>
  );
}

export default NavBar;
