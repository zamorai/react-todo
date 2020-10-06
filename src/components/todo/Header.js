import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';

import "../../styles/header.css"

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}
 
Modal.setAppElement('#modal');  

export default function Header(props) {
  const[todo, setTodo] = useState("");
  const[modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo(todo.trim())
    if(todo.length > 0) {
      props.handleSubmit(todo);
    }
    setTodo("");
  }

  return (
    <div className='w-full h-12 bg-gray-200 flex justify-between items-center shadow'>  
      <div className='ml-6'>
        Priority
      </div>
      <form className ='flex-grow flex justify-center' onSubmit = {handleSubmit}> 
        <input className="px-2 py-1 rounded input-custom outline-none" onChange={(e) => setTodo(e.target.value)} value={todo} type='text' placeholder='Enter your todo'></input>
      </form>
      <div className='mr-6'>
        <svg className='h-6 w-6 cursor-pointer' onClick={openModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <Modal isOpen={modalOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example">
          <svg onClick={closeModal} className="h-4 w-4 mt-1 mr-1 absolute top-0 right-0 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="red">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span className="text-lg font-light flex items-center justify-center mb-8">Example Modal</span>
          <div className='flex flex-col justify-center items-center'>
            <span className='text-2xl font-light'>Just go to the main page tomorrow and find out!</span>
          </div>
        </Modal> 
      </div>
    </div>
  ) 
}
