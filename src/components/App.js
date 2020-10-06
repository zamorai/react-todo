import React from 'react';
import Main from './todo/Main';
import Weather from './weather/Weather'

export default function App() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4'> 
      <div className='col-span-1 bg-blue-900'>
        <Weather/>
      </div>
      <div className='relative col-span-3 bg-gray-300 h-screen'>
        <Main/>
      </div>
    </div>
  ) 
}
