import React from "react";

const Todolist = () => {
    const todos = ["Call dentist", "Email landlord"]
    return(
        <div className="list">
            <h3>To do's:</h3>
                <ul>
                    {
                        todos.map((todo) => (
                            <li>
                                <input type="checkbox" /> {todo}
                            </li>
                        ))
                    }
                </ul>
        </div>
    )
}

export default Todolist;