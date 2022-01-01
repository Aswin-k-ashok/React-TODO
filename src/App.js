import React from 'react';
import './App.css';
import { useState } from 'react';


function App() {
  const[TodoList,SetTodoList] = useState([])   // making a state to store the arrays
  const[Todo,SetTodo] = useState('')            // making a state to store the values of the arrays
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" value={Todo} onChange={(e)=>SetTodo(e.target.value)} placeholder="Add item..." />
        <i className="fas fa-plus" onClick={()=>SetTodoList([...TodoList,{id:Date.now(),text:Todo,status:false}])}></i>
      </div>


      <div className="todos">
      
        {TodoList.map((obj)=>{
          return(
            <div className="todo">
            <div className="left">
              <input onChange={(e)=>{
                console.log(e.target.checked)
                console.log(obj)
                SetTodoList(TodoList.filter(obj2=>{
                  if(obj2.id===obj.id){
                    obj.status = e.target.checked
                  }
                  return obj2
                }))
              }} value={obj.status} type="checkbox" name="" id="" />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i className="fas fa-times"></i>
            </div>
          </div>
          )
        })}

        {TodoList.map((obj)=>{
          if(obj.status){
            return(
              <h1>{obj.text}</h1>
            )
            return null
          }
        })}
   

      </div>
    </div>
  );
}

export default App;