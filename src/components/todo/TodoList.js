import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {

  const renderedItems = props.todo.map(item => {
    return <Todo key={item.id} completedDelete={props.completedDelete} handleCompleted = {props.handleCompleted} handleDelete={props.handleDelete} id={item.id} todo ={item.todo} />
  })

  return (
    <div className='divide-y divide-gray-200'>
      {renderedItems} 
    </div>
  )
}
