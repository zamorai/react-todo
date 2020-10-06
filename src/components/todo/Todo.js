import React, { useState } from 'react';

export default function Todo(props) {

  const[icon, setIcon] = useState(false);

  const handleDelete = (id) => {
    props.handleDelete(id)
  }

  const iconChange = (id) => {
    setIcon(!icon);
    if(icon) {
      props.completedDelete(id);
    } else if(!icon) {
      var item = {
        id: props.id,
        todo: props.todo
      }
      props.handleCompleted(item)
    }
  }


  return (
    <div className='flex h-16 bg-gray-100 justify-between items-center shadow'>
      <div onClick = {() => iconChange(props.id)} className='ml-6'>
        {icon ? <svg className='w-6 h-6 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="green"> 
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>:
                <svg className='h-6 w-6 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>}   
      </div>
      <div className='flex-1 ml-6'>
        <span className='text-gray-800 select-none'>{props.todo}</span>
      </div>
      <div onClick ={() => handleDelete(props.id)} className='mr-6'>
        <span className='cursor-pointer'>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#D31122">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </span> 
      </div>
    </div>
  )
}
