import React from "react";

const Todo = ({todo}) => {
    return(
        <div className="listitem">
            <label>
                <input type="checkbox" checked={todo.complete}/>
                {todo}
            </label>
        </div>
    )

}

export default Todo