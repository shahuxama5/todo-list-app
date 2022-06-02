import React from 'react'

export const Todo = ({todo, onDelete}) => {
  return (
    <>
    <div className='container my-3'>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn btn-danger' onClick={()=> {onDelete(todo)}}>Delete</button>
    </div>
    <hr />
    </>
  )
} 
