import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

function GoogleAutocomplete(props) {
  const searchOptions = {
    componentRestrictions: { country: 'ca' }
  }
  const renderFunction = ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
    < >
      <input
        {...getInputProps({
          className: 'ui fluid search selection dropdown',
          placeholder: `${props.placeholder}`
        })}
      />
      <div className="autocomplete-dropdown-container">
        {suggestions.map(suggestion => {
          const className = suggestion.active
            ? 'suggestion-item--active'
            : 'suggestion-item';
          // inline style for demonstration purpose
          const style = suggestion.active
            ? { width: '100%', backgroundColor: 'rgba(13, 54, 6, .6)', borderTop: '1px solid #fafafa', padding: '.78571429rem 1.14285714rem', whiteSpace: 'normal', wordWrap: 'normal', cursor: 'pointer', color: 'white' }
            : { backgroundColor: '#ffffff', borderTop: '1px solid #fafafa', padding: '.78571429rem 1.14285714rem', whiteSpace: 'normal', wordWrap: 'normal', cursor: 'auto' };
          return (
            <div
              {...getSuggestionItemProps(suggestion, {
                className,
                style,
              })}
            >
              <span>{suggestion.description}</span>
            </div>
          );
        })}
      </div>
    </>
  )

  return (
    <PlacesAutocomplete
      value={props.address}
      onChange={props.handleChange}
      onSelect={props.handleSelect}
      highlightFirstSuggestion={true}
      searchOptions={searchOptions}
    >
      {renderFunction}
    </PlacesAutocomplete >
  );
}

export default GoogleAutocomplete