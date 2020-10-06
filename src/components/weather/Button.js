import React, { useEffect, useState } from 'react';
import axios from 'axios';

const KEY = '2056d6993c7c0cb16f8af096ff38cb93';

export default function Button() {
  const[weather, setWeather] = useState({});
  const[lat, setLat] = useState(null);
  const[long, setLong] = useState(null);

  const getWeather = async () => {
    navigator.geolocation.getCurrentPosition(position=>{
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    
  }

  useEffect(() => {
    const weather = async () => {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2056d6993c7c0cb16f8af096ff38cb93`);
      setWeather(response.data)
    }
    if(lat && long) {
      weather();
    }

  }, [lat,long])

  return (
    <div>
      <button onClick={getWeather} className='px-3 py-1 border border-blue-800 rounded lg:mt-24'>Click me</button>
      
    </div>
  )
}
