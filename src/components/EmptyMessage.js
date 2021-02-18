import React from "react";

const EmptyMessage = ({todos}) => {

    if(todos.length === 0){

        return(
            <div className="message">
                <p>Please add some to do's</p>
                <p>so you can start a productive day !</p>
            </div>
        )

    }
    return null;

}

export default EmptyMessage;