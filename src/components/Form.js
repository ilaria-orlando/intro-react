import React from "react";


const Form = () =>{
    return(
        <div className="form">
            <form>
                <div><input type="text" name="todo" value="Type a new to do"/></div>
                <div><button type="submit" className="button">Submit</button></div>
            </form>
        </div>
    );
};

export default Form;