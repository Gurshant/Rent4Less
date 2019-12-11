import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import ProgressSpinner from './ProgressSpinner';

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
        {loading && <ProgressSpinner />}
        {suggestions.map(suggestion => {
          const className = suggestion.active
            ? 'suggestion-item--active'
            : 'suggestion-item';
          // inline style for demonstration purpose
          const style = suggestion.active
            ? { backgroundColor: '#fafafa', borderTop: '1px solid #fafafa', padding: '.78571429rem 1.14285714rem', whiteSpace: 'normal', wordWrap: 'normal', cursor: 'auto' }
            : { backgroundColor: '#ffffff', borderTop: '1px solid #fafafa', padding: '.78571429rem 1.14285714rem', whiteSpace: 'normal', wordWrap: 'normal', cursor: 'pointer' };
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