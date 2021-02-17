import React from "react";

const Todo = ({todo, toggleTodo}) => {


    const getTodoId = () => {
        toggleTodo(todo.id)
    }



    return(
        <div className="listitem">
            <label className={!todo.complete ? "line" : "noline"}>
                <input type="checkbox"  checked={todo.complete} onClick={getTodoId}/>
                {todo.name}
            </label>
        </div>
    )

}

export default Todo