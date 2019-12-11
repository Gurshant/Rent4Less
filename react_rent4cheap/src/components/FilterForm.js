import React from "react";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import './HomePage.css'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


function FilterForm(props) {
  const handleFilter = (event) => {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);
    props.filterMarker({
      bedroom: fd.get("bedroom"),
      bathroom: fd.get("bathroom"),
      sqft: fd.get("sqft"),
      pet_friendly: fd.get("pet_friendly"),
      smoking: fd.get("smoking"),
      parking: fd.get("parking"),
      laundromat: fd.get("laundromat"),
      gym: fd.get("gym"),
      fireplace: fd.get("fireplace"),
      deck: fd.get("deck"),
      ac: fd.get("ac"),
    })
  }
  return (
    <>
      <form className="form" onSubmit={handleFilter} >
        <Typography id="discrete-slider-always" gutterBottom>
          Minimum Bedrooms
      </Typography>
        <Slider
          defaultValue={0}
          max={5}
          aria-labelledby="discrete-slider-always"
          step={1}
          name="bedroom"
          id="bedroom"
          valueLabelDisplay="on"
        />

        <Typography id="discrete-slider-always" gutterBottom>
          Minimum Bathrooms
        </Typography>
        <Slider
          defaultValue={0}
          max={5}
          aria-labelledby="discrete-slider-always"
          step={1}
          name="bathroom"
          id="bathroom"
          valueLabelDisplay="on"
        />
        <Typography id="discrete-slider-always" gutterBottom>
          Minimum Sqft
        </Typography>
        <Slider
          defaultValue={0}
          max={4000}
          aria-labelledby="discrete-slider-always"
          step={10}
          name="sqft"
          id="sqft"
          valueLabelDisplay="on"
        />
        <Typography id="discrete-slider-always" gutterBottom>
          Maximum Price
        </Typography>
        <Slider
          defaultValue={4000}
          max={4000}
          aria-labelledby="discrete-slider-always"
          step={10}
          name="price"
          id="price"
          valueLabelDisplay="on"
          inverted="true"
        />
        <ul className="checkboxes_filter">
          <li>
            <FormControlLabel
              control={<Checkbox value={true} color="primary" name="pet_friendly" />}
              label="Pet Friendly"
            />
          </li> <li>
            <FormControlLabel
              control={<Checkbox value={true} color="primary" name="smoking" />}
              label="Smoking"
            />
          </li><li>
            <FormControlLabel
              control={<Checkbox value={true} color="primary" name="parking" />}
              label="Parking"
            />
          </li><li>
            <FormControlLabel
              control={<Checkbox value={true} color="primary" name="gym" />}
              label="Gym"
            />
          </li><li>
            <FormControlLabel
              control={<Checkbox value={true} color="primary" name="laundromat" />}
              label="Laundromat"
            />
          </li><li>
            <FormControlLabel
              control={<Checkbox value={true} color="primary" name="fireplace" />}
              label="Fireplace"
            />
          </li><li>
            <FormControlLabel
              control={<Checkbox value={true} color="primary" name="deck" />}
              label="Deck"
            />
          </li><li>
            <FormControlLabel
              control={<Checkbox value={true} color="primary" name="ac" />}
              label="AC"
            />
          </li>
        </ul>

        <br />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        // className={classes.submit}
        >Filter
        </Button>
      </form>
    </>
  )
}

export default FilterForm
