import React from 'react';
import { useState, useEffect } from 'react';
 

export default function Header(props) {

  const[todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(todo);
    setTodo("");
  }

  return (
    <div className='w-full h-12 bg-gray-200 flex justify-between items-center shadow'>  
      <div className='ml-6'>
        Priority
      </div>
      <form className ='flex-grow place-holder flex justify-center' onSubmit = {handleSubmit}> 
        <input className="px-2 py-1 rounded w-4/5 outline-none" onChange={(e) => setTodo(e.target.value)} value={todo} type='text' placeholder='Enter your todo'></input>
      </form>
      <div className='mr-6'>
        <svg className='h-6 w-6 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
  ) 
}
