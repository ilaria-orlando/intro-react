import React from "react";

const Todolist = () => {
    return(
        <div className="list">
            <h3>To do's:</h3>
                <div>
                    <input type="checkbox" name="todo1"/>
                    <label htmlFor="todo1">Call dentist</label>
                </div>
                <div>
                    <input type="checkbox" name="todo2"/>
                    <label htmlFor="todo2">Email landlord</label>
                </div>
        </div>
    )
}

export default Todolist;