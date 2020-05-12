import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faTint } from '@fortawesome/free-solid-svg-icons'


const api= {
  key: "576c98edd5621b7fe8cacfa5506e9654",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  //using useState initialize weather and query values
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  //using useEffect to listen on the searchbar with the Algolia API 
  //then when a country is selected, run the search function.
  //Also passed empty erray into second argument of useEffect for clean up and make sure
  //that the effect will go back to initial value since this is what is needed in this case.
    useEffect(
      () => {
    var places = require('places.js');
    var placesAutocomplete = places({
      appId: 'plALBLVXJIXG',
      apiKey: 'a05d42ed7bda4067393cd25340bfd1e8',
      container: document.querySelector('#searchbarplz'),
      type: 'city'
    });
    console.log(placesAutocomplete)
   
    placesAutocomplete.on('change', (e) => {
      let city = e.suggestion.name;
      let country = e.suggestion.countryCode;
      console.log(city)
      search(city, country)
      console.log(e)
    });
  },[]);
  
  //search openweather API using city and country values taken from Algolia API. Then changes weather state to render the results 
  const search = (city, country) => {
    // if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${city},${country}&units=metric&APPID=${api.key}`)
      .then(response => response.json())
      .then(result => {
        setWeather(result);
        //resetting search bar value to empty string to clear it after the search
        setQuery('');
        console.log(result);
        
        })
    // }
  }
  
  const makeDate = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year} `
  }
  return (
    
    <div className={
      (typeof weather.main !="undefined") ? 
      ((weather.weather[0].main === 'Clouds') ? 'app clouds' : 
      ((weather.weather[0].main === 'Rain') ? 'app rain' :
      ((weather.weather[0].main === 'Thunderstorm') ? 'app thunderstorm' :
      ((weather.weather[0].main === 'Clear') ? 'app' :
      ((weather.weather[0].main === 'Mist') ? 'app mist' :
      ((weather.weather[0].main === 'Haze') ? 'app haze' :
      ((weather.weather[0].main === 'Snow') ? 'app snow' : 'app'))))))) : 'app'
    }
      >
       
       <main>
         <div className="searchBox">
           <input
           type="search"
           id="searchbarplz"
           className="searchBar"
           placeholder="Location?"
           onChange= {(e) => {setQuery(e.target.value)}}
           value= {query}
           />
           
         </div>
        {(typeof weather.main !="undefined") ? (

         <div className="locationBox">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">
            {makeDate(new Date())}
          </div>
           
        <div className="weatherBox">
          <div className="temp">{Math.round(weather.main.temp)}°C</div>
          <div className="feelsLike">Feels like {Math.round(weather.main.feels_like)}°C</div>
          <div className="additionalStats">
            <div className="wind">
              <FontAwesomeIcon icon={faWind} size='2x'/>
            <div className="windValue">
            {weather.wind.speed}km/h</div>
            </div>
            <div className="humidity">
            <FontAwesomeIcon icon={faTint} size='2x'/> 
            <div className="humidityValue">
              </div>{weather.main.humidity}%
              </div>
          </div>
          <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}

         
       </main>



    </div>
  );
}

export default App;
