import React, { Component } from 'react'

function ListingDetails(props) {
  return (
    <>
      <h1>{props.address} </h1>
      <h3>Bedroom: {props.bedroom}</h3>
      <h3>Bathroom: {props.bathroom}</h3>
      <h3>price: {props.price}</h3>
      <h3>sqft: {props.sqft}</h3>
      <h3>deck: {props.deck}</h3>
      <h3>ac: {props.ac}</h3>
    </>
  )
}

export default ListingDetails