import React from 'react';
import GoogleAutocomplete from './GoogleAutocomplete';

function ListingNewForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);

    props.onSubmit({
      street_number: fd.get("street_number"),
      route: fd.get("route"),
      locality: fd.get("locality"),
      administrative_area_level_1: fd.get("administrative_area_level_1"),
      postal_code: fd.get("postal_code"),
      country: fd.get("country"),
      lat: fd.get("lat"),
      lng: fd.get("lng"),
      bedroom: fd.get("bedroom"),
      bathroom: fd.get("bathroom"),
      sqft: fd.get("sqft"),
      ac: fd.get("ac"),
      fireplace: fd.get("fireplace"),
      deck: fd.get("deck"),
      price: fd.get("price"),
      description: fd.get("deck"),
      is_active: fd.get("is_active")
    });
    currentTarget.reset();
  }
  return (
    <main>
      <form className="ui form" onSubmit={handleSubmit}>

        <div className="Address">
          <h2>Address</h2>
          <div className="field">
            <input type="number" name="street_number" id="street_number" placeholder="Street Number" required />
          </div>
          <div className="field">
            <input type="text" name="route" id="route" placeholder="Street" required />
          </div>
          <div className="field">
            <input type="text" name="locality" id="locality" placeholder="City" required />
          </div>
          <div className="field">
            <input type="text" name="administrative_area_level_1" id="administrative_area_level_1" placeholder="Province" required />
          </div>
          <div className="field">
            <input type="text" name="country" id="country" placeholder="Country" required />
          </div>
          <div className="field">
            <input type="text" name="postal_code" id="postal_code" placeholder="Postal Code" required />
          </div>
        </div>
        <div className="listing">
          <h2>Property Details</h2>
          <div className="field">
            <input type="number" name="bedroom" id="bedroom" placeholder="Number of Bedrooms" />
          </div>
          <div className="field">
            <input type="number" name="bathroom" id="bathroom" placeholder="Number of Bathrooms" />
          </div>
          <div className="field">
            <input type="number" name="sqft" id="sqft" placeholder="Total Sqft" />
          </div>
          <div className="field">
            <input type="number" name="price" id="price" placeholder="Price" />
          </div>
          <div>
            <label htmlFor="ac">AC</label>
            <input type="checkbox" name="ac" id="ac" />
          </div>
          <div>
            <label htmlFor="fireplace">Fireplace</label>
            <input type="checkbox" name="fireplace" id="fireplace" />
          </div>
          <div>
            <label htmlFor="deck">Deck</label>
            <input type="checkbox" name="deck" id="deck" />
          </div>
          <div>
            <label htmlFor="is_active">Active?</label>
            <input type="checkbox" name="is_active" id="is_active" />
          </div>
          <div>
            <label htmlFor="description">description</label>
            <input type="text" name="description" id="description" placeholder="1200" />
          </div>
        </div>

        <button className="ui blue button" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}
export default ListingNewForm;