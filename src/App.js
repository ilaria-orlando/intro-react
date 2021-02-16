import React, {useState, useRef, useEffect} from "react";
import './App.css';
import uuidv4 from "uuid/dist/v4";

//components
//import Form from "./components/Form";
import Todolist from "./components/Todolist";
import SvgEnd from "./components/SvgEnd";
import SvgMiddle from "./components/SvgMiddle";

//

function App() {
    const [todos, setTodos] = useState([{id: 1, name: "Call dentist", complete: false}, {id: 2, name:"Email landlord", complete: false}]);
    const todoNameRef = useRef();
    const LOCAL_STORAGE_KEY = 'todosApp.todos'

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
          <h1>My to do's</h1>
          <div className="form">
              <form>
                  <div><input ref={todoNameRef} type="text" name="todo"/></div>
                  <div><button onClick={addTodo} type="submit" className="button">Submit</button></div>
              </form>
          </div>
          <SvgMiddle />
          <Todolist todos={todos}/>
          <SvgEnd />
      </div>
  );
}

export default App;
