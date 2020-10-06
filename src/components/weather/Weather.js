import React, { useState } from 'react';
import Button from './Button';

export default function Weather() {
  const[weather, setWeather] = useState({});

  const getWeather = (data) => {
    setWeather(data);
  } 
  
  const renderItems = () => {
    if(weather.name) {
      return ( 
      <div className='border border-gray-100 px-8 py-4 divide-y divide-gray-200'>
        <span className='flex justify-center font-bold mb-2'>Weather for: {weather.name}</span>
        <div className="lg:flex lg:flex-col">
          <span className='mt-2 capitalize'>Temperature: {weather.main.temp}</span>
          <span className="capitalize"> Feels Like: {weather.main.feels_like} </span>
          <span className="capitalize"> How's Outside: {weather.weather[0].description}</span>
        </div>

      </div> 
      )
    }
  }

  return (
    <div className='text-white flex lg:flex-col items-center justify-around h-full lg:h-auto'>
      <div>
        <Button getWeather={getWeather}/>
      </div>
      <div className='lg:mt-24'>
        {renderItems()}
      </div>
    </div>
  )
}
