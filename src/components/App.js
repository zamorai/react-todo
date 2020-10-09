import React from 'react';
import Main from './todo/Main';
import Weather from './weather/Weather';
import '../styles/app.css';

export default function App() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4'> 
      <div className='col-span-1 bg-blue-900 custom-bg h-auto lg:h-full'>
        <Weather/>
      </div>
      <div className='relative col-span-3 bg-gray-300 h-screen overflow-y-auto custom-main'> 
        <Main/>
      </div>
    </div>
  ) 
}
