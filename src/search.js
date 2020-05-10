// import React, { useEffect } from 'react';
// import { useState } from 'react';

// const api= {
//     key: "576c98edd5621b7fe8cacfa5506e9654",
//     base: "https://api.openweathermap.org/data/2.5/"
//   }



// const SearchBar = () => {

// const [query, setQuery] = useState('');
// const [weather, setWeather] = useState('');

// const search = e => {
//   if (e.key === "Enter") {
//     fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//     .then(response => response.json())
//     .then(result => {
//       setWeather(result);
//       setQuery('');
//       console.log(result);
//       })
//   }
// }
//   useEffect(() => {
//     var places = require('places.js');
//     const configuration = {
//       appId: "plALBLVXJIXG",
//       apiKey: "a05d42ed7bda4067393cd25340bfd1e8",
//       container: document.getElementById('searchbarplz')
//     };
//     // const placesAutocomplete = places(configuration);
    
//     // placesAutocomplete.on('change', function resultSelected(e) {
//     //   let city = e.suggestion.name;
//     //   setQuery(city)
//     //   props.weather(city);
//     // });
//   });

//   return (
//     <div className="searchBox">
//       <input type="search" 
//       className="searchBar" 
//       id="searchbarplz" 
//       name="location" 
//       placeholder="Location?" 
//       onChange= {e => setQuery(e.target.value)}
//            value = {query}
//            onKeyPress={search}
//       />
//     </div>
//   );
// };

// export default React.memo(SearchBar)
