# Rent4Less

Rent4Less is a rental management and advertising system. This project's main purpose is to help users find rental properties very easily and efficiently, compared to other commonly used options today. User's can search areas, filter the results, then contact owners in a matter of minutes, helping them find their dream home quickly. Rent4Less is supported by both desktops and mobile phones.

This Project includes two key components: 
1. A backend API built using Ruby on Rails
2. The frontend built using React.js

## Installation
1. Clone the repo to your machine 
    * By in your terminal running  ```git clone git@github.com:Gurshant/Rent4Less.git``` or
    * Simply download the repo
2. Make sure ruby version: 2.6.3 and rails version: 6.0.0 is installed

3. Start the Rails Api
    1. Navigate to the rails project 
        * ```cd railsRent4Less```
    2. Install all dependencies
        * ``` bundle install```
    3. Migrate database
        * ```rails db:create ```
        * ```rails db:migrate ```
        * ```rails db:seed ```
    4. Start the server
         * ```rails s```
4. Start the React front-end in a new tab
    1. Navigate to the rails project 
        * ```cd react_rent4less```
    2. Install all dependencies
        * ```npm install```
    3. Start the server
        * ```npm start```
        
Note: The front-end server is running on http://localhost:3001 and the API server is running on http://localhost:3000

## Setting up API Keys

#### Amazon Web Services Api Key
1. Create an account at [AWS](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3Fstate%3DhashArgs%2523%26isauthcode%3Dtrue&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fhomepage&forceMobileApp=0) 
2. Get an access key for an S3 account
3. Create a file under ```/railsRent4Less/config/initializers/``` called api_keys.rb  
    * Paste your keys in the file using the format:
    ```
    ENV["AWS_ACCESS_KEY_ID"]="ADD ACCESS KEY ID"
    ENV["AWS_SECRET_ACCESS_KEY"]="ADD SECRET ACCESS KEY"
    ```
    
#### Google Maps Api Key
1. Create an account at [Google](console.cloud.google.com/home) 
2. Create a project with the places and geocoding api
3. Create a file under ```/react_rent4less``` called .env
    * Paste your key in the file using the format:
    ```
    REACT_APP_MAPS_API_KEY=MY_API_KEY
    ```
## Technologies Used

* [React.js](https://reactjs.org) - Frontend Framework

* [Ruby on Rails](https://rubyonrails.org) - Backend API

* [PostgreSQL](https://www.postgresql.org) - Database

* [Materials UI](https://material-ui.com) - Styling  

* [Google Places API](https://cloud.google.com/maps-platform/places/?utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_315916117565-ADGP_Hybrid+%7C+AW+SEM+%7C+BKWS+~+Google+Maps+Places+API-KWID_43700039136946099-kwd-22859391737-userloc_9001503&utm_term=KW_google%20places%20api-ST_google+places+api&gclid=EAIaIQobChMIzq7it6XB6AIV7B-tBh2i1g9sEAAYASAAEgJXA_D_BwE) - Used for finding and validating addresses

* [Leaflet Maps API](https://leafletjs.com) - Displaying the map, as Google Maps API had a recent price hike

* [AWS S3 API](https://aws.amazon.com/s3/?sc_channel=PS&sc_campaign=acquisition_CA&sc_publisher=google&sc_medium=ACQ-P%7CPS-GO%7CBrand%7CDesktop%7CSU%7CStorage%7CS3%7CCA%7CEN%7CText&sc_content=s3_e&sc_detail=aws%20s3&sc_category=Storage&sc_segment=293634539894&sc_matchtype=e&sc_country=CA&s_kwcid=AL!4422!3!293634539894!e!!g!!aws%20s3&ef_id=EAIaIQobChMIjNnwxqXB6AIVhspkCh2v5AaUEAAYASAAEgLfcvD_BwE:G:s) - Hosting Images

## Screenshots

<img src="website_screenshots/homeImage.png?raw=true" align="left" height="350" width="380" >
<img src="website_screenshots/SignIn.png?raw=true" align="left" height="350" width="380" >
<img src="website_screenshots/ListingIndexPopup.png?raw=true" align="left" height="350" width="380" >
<img src="website_screenshots/ListingShow.png?raw=true" align="left" height="350" width="380" >
<img src="website_screenshots/NewListing.png?raw=true" align="left" height="350" width="380" >
<img src="website_screenshots/Mobile.png?raw=true" align="left" height="500" width="380" >
<img src="website_screenshots/MobileNavBar.png?raw=true" align="left" height="500" width="380" >


