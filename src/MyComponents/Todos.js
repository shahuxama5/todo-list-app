import React from 'react'
import {Todo} from "../MyComponents/Todo";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className='container my-2' style={myStyle}>
      <h2 className='my-3'>Todos List</h2>
      { props.todos.length === 0 ? "No todos to display" : 
        props.todos.map((todo) => {
          return (
           <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          )
        })
      }
    </div>
  )
}
