import React, { useState } from 'react';
import Button from './Button';
import WeatherList from './WeatherList';

export default function Weather() {
  const[weather, setWeather] = useState([]);

  


  return (
    <div className='text-white flex lg:flex-col items-center justify-around h-full lg:h-auto'>
      <div>
        <Button/>
      </div>
      <div>
        <WeatherList/>
      </div>
    </div>
  )
}
