import React, {useState} from "react";

import Todo from "./Todo";

const Todolist = ({todos}) => {

    return(
        <div className="list">
            <h3>To do's:</h3>
            {todos.map(todo => {
                return (<Todo key={todo.id} todo={todo.name} />)
            })}
        </div>
    )
}

export default Todolist;