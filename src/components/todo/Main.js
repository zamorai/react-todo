import React, { useState } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import random from 'random';
import Footer from './Footer';

export default function Main() {

  const[todo, setTodo] = useState([]);
  const[completed, setCompleted] = useState([])

  const handleSubmit = (item) => {
    var todoItem = {
      id: random.int(0,10000000),
      todo: item
    }
    setTodo([...todo, todoItem]);
  }

  const handleCompleted = (item) => {
    setCompleted([...completed, item]);
  }

  const bundleDelete = () => {
    var newList = todo.filter(itemz => {
      return !completed.some(itemx => {
        return itemz.id === itemx.id
      }); 
    })
    setTodo(newList);
  }

  const handleDelete = (id) => {
    setTodo(todo.filter(item => {
     return item.id !== id
    }))
  }

  const completedDelete = (id) => {
    setCompleted(completed.filter(item => {
      return item.id !== id
    }))
  }

  return (
    <div>
      <Header handleSubmit={handleSubmit}/>
      <TodoList completedDelete={completedDelete} handleCompleted={handleCompleted} handleDelete={handleDelete} todo={todo} />
      <Footer bundleDelete={bundleDelete} todo={todo}  />
    </div>
  )
}
