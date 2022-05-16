import React from 'react'
import Todo from './ToDo'


function TodoList({todo}) {
    return (
        <div>
            <Todo todo= {todo}/>
            {todo.length}
        </div>
    )
}

export default TodoList
