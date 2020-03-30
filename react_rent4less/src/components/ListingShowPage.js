import React, { useState, useEffect } from "react";
import { Listing } from "../requests";
import ListingHeader from "./ListingHeader";
import ListingImageContact from './ListingImageContact';
import ListingDetailNav from './ListingDetailNav';
import ProgressSpinner from "./ProgressSpinner";
import Footer from "./Footer"

function ListingShowPage(props) {

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    Listing.one(props.match.params.id).then(listing => {
      setListing(listing)
      setLoading(false)
    })
  }, [props.match.params.id])

  if (loading) {
    return (<ProgressSpinner />)
  }
  return (
    <main>
      <ListingHeader {...listing} />
      <ListingImageContact {...listing} />
      <ListingDetailNav {...listing} />
      <Footer />
    </main>
  );
}

export default ListingShowPage;
