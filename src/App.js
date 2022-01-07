import React from 'react';
import './App.css';
import { useState } from 'react';


function App() {
  const[TodoList,SetTodoList] = useState([])   // making a state to store the arrays
  const[Todo,SetTodo] = useState('')            // making a state to store the values of the arrays
  return (
    <div className="app">
      <img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-list-grocery-flatart-icons-lineal-color-flatarticons.png"/>
      <div className="mainHeading">
        <h1>ToDo List </h1>
        
      </div>
      <div className="subHeading">
        <br />
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


              <i className="fas fa-times" onClick={(e)=>{  // delete functionality
                SetTodoList(TodoList.filter(obj2=>{
                  let temp;
                  if(obj2.id!=obj.id){
                    temp = obj2
                  }
                  return temp;
                }))
              }}></i>
            </div>
          </div>
          )
        })}

        <div className='completed'>
        <h2>completed taskes</h2>
      
      <div className='completed-list'>

        {TodoList.map((obj)=>{
          if(obj.status){
            return(
              <h4>{obj.text}</h4>
              )
              return null
            }
          })}
   
          </div>
        </div>

        {/* <button onClick={()=>{
          SetTodoList(TodoList.)
        }}>clear</button> */}

      </div>
    </div>
  );
}

export default App;