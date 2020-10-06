import React from 'react';
import '../../styles/footer.css';

export default function Footer(props) {

  return (
    <div className='absolute bottom-0 left-0 h-12 bg-gray-100 w-full flex justify-between items-center shadow-inner'> 
      <div/>
      <div className='ml-48'>
      {props.todo.length} left
      </div>
      <div className='flex items-center'> 
        <span className='mr-4 text-sm'>Delete selected</span>
        <svg className='h-6 w-6 mr-6 cursor-pointer custom-trash' onClick={() => props.bundleDelete()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#D31122">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </div>
    </div>
  )
} 
