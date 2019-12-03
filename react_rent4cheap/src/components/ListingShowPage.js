import React, { Component } from "react";
import { Listing } from "../requests";
import ListingDetails from "./ListingDetails";

class ListingShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: null,
      isLoading: true
    };
  }

  componentDidMount() {
    Listing.one(this.props.match.params.id).then(listing => {
      this.setState({
        listing,
        isLoading: false
      })
    })
  }

  deletelisting() {
    this.setState({
      listing: null
    });
  }

  render() {
    if (this.state.isLoading) {
      return (<h1>hello</h1>)
    }
    return (
      <main>
        <ListingDetails {...this.state.listing} />
        <button
          className="ui right floated red small button"
          onClick={() => this.deleteListing()}
        >
          Delete
        </button>
      </main>
    );
  }
}

export default ListingShowPage;
