import React, { Component } from "react";

function FilterForm(props) {
  function handleFilter(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);
    props.filterMarker({
      bedroom: fd.get("bedroom"),
      bathroom: fd.get("bathroom"),
      sqft: fd.get("sqft"),
      price: fd.get("price"),
    })
  }

  return (
    <form className="ui form" onSubmit={handleFilter} >
      <div className="field" >
        <input type="number" name="bedroom" id="bedroom" placeholder="Minimum Number of Bedrooms" />
      </div>
      <div className="field">
        <input type="number" name="bathroom" id="bathroom" placeholder="Minimum Number of Bathrooms" />
      </div>
      <div className="field">
        <input type="number" name="sqft" id="sqft" placeholder="Minimum Sqft" />
      </div>
      <div className="field">
        <input type="number" name="price" id="price" placeholder="Maximum Price" />
      </div>
      <button className="ui blue button" type="submit">
        Submit
        </button>
    </form>
  )
}

export default FilterForm
