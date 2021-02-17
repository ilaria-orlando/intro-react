import React, {useState} from "react";

import Todo from "./Todo";

const Todolist = ({todos, toggleTodo}) => {

    return(
        <div className="list">
            <h3>To do's:</h3>
            {todos.map(todo => {
                return (<Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />)
            })}
        </div>
    )
}

export default Todolist;