import React, {useState, useRef} from "react";
import './App.css';
import uuidv4 from "uuid/dist/v4";

//components
//import Form from "./components/Form";
import Todolist from "./components/Todolist";

//

function App() {
    const [todos, setTodos] = useState([{id: 1, name: "Call dentist", complete: false}, {id: 2, name:"Email landlord", complete: false}]);
    const todoNameRef = useRef();

    const addTodo = (event) =>{
        event.preventDefault();
        const name = todoNameRef.current.value
        if(name === "") return
        setTodos( prevTodos => {
                return [...prevTodos, {id: uuidv4, name: name, complete: false}]
            }

        )
        todoNameRef.current.value = null
    }

    return (
      <div className="App">
          <h1>My to do list</h1>
          <div className="form">
              <form>
                  <div><input ref={todoNameRef} type="text" name="todo"/></div>
                  <div><button onClick={addTodo} type="submit" className="button">Submit</button></div>
              </form>
          </div>
          <Todolist todos={todos}/>
      </div>
  );
}

export default App;
