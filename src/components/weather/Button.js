import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../../styles/button.css'

export default function Button(props) {
  const[lat, setLat] = useState(null);
  const[long, setLong] = useState(null);
  const[spin, setSpin] = useState(false);

  const useWeather = () => {
    navigator.geolocation.getCurrentPosition(position=>{
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    if(!long){
      setSpin(true);
    }

  }

  useEffect(() => {
    const findWeather = async () => {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=2056d6993c7c0cb16f8af096ff38cb93`);
      props.getWeather(response.data);
      setSpin(false);
    }
    if(lat && long) {
      findWeather();
    }

  }, [lat,long])


  return (
    <div>
      <button onClick={useWeather} className={`px-8 py-2 border border-gray-100 lg:mt-24 m-6 focus:outline-none custom-button flex items-center`} >Get Weather <svg className={`h-4 w-4 ml-4 ${spin && 'animate-spin'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg></button> 
    </div>
  )
}
