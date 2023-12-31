import { toQueryString } from '../utils';
import { useState, useEffect } from 'react';
import '../.env'
// require('dotenv').config();

export default function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      pollWeather,
      (err) => console.log(err),
      { timeout: 10000 }
    );
  }, [])

  const pollWeather = async (location) => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    const apiKey = "b65b43cc09af164f099fe5a807d56972"
    // const apiKey = process.env.REACT_APP_WEATHER_API                                    // Not working
    console.log(apiKey);

    const params = {
      lat: location.coords.latitude,
      lon: location.coords.longitude,
      appid: apiKey
    };

    url += toQueryString(params);

    const res = await fetch(url);
    if (res.ok) {
      const weather = await res.json();
      setWeather(weather);
    }
    else {
      alert ("Check Weather API key!")
    }
  }

  let content = <div className='loading'>loading weather...</div>;

  if (weather) {
    const temp = (weather.main.temp - 273.15) * 1.8 + 32;
    content = (
      <div>
        <p>{weather.name}</p>
        <p>{temp.toFixed(1)} degrees</p>
      </div>
    );
  }
  else {
    content = (
      <div>
        Weather is currently unavailable. (Are Location Services enabled?)
      </div>
    )
  }

  return (
    <section className="weather-section">
      <h1>Weather</h1>
        <div className='weather'>
          {content}
        </div>
    </section>
  );

}
