import React from 'react'
import FamilyImage from './images/family.jpg'
import GoogleAutocomplete from './GoogleAutocomplete'
import { makeStyles } from '@material-ui/core/styles';
import './HomePage.css'


const search_container = {
  backgroundImage: `url("${FamilyImage}")`,
  backgroundColor: '#cccccc',
  height: '92vh',
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}
function HomePage(props) {

  return (
    <>
      <div style={search_container}>
        <div style={{ height: '40vh' }}></div>
        {/* <img src={FamilyImage} className={classes.fullscreen_image} /> */}
        <GoogleAutocomplete
          // handleSelect={address => handleSelectAndRedirect(address)}
          handleSelect={props.handleSelect}
          handleChange={props.handleChange}
          address={props.address}
        />

      </div>
      <main class="wrapper">
        <section class="section parallax bg1">
          <h1>Such Adorableness</h1>
        </section>
        <section class="section static">
          <h1>Boring</h1>
        </section>
        <section class="section parallax bg2">
          <h1>SO FWUFFY AWWW</h1>
        </section>
      </main>

    </>
  );
}
export default HomePage;