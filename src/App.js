import React, {useState, useRef, useEffect} from "react";
import './App.css';
import {v4 as uuidv4} from "uuid";

//components
//import Form from "./components/Form";
import Todolist from "./components/Todolist";
import SvgEnd from "./components/SvgEnd";
import SvgMiddle from "./components/SvgMiddle";
import v5 from "uuid/dist/esm-node/v5";

//

function App() {

    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef();
    const LOCAL_STORAGE_KEY = 'todosApp.todos'


    const addTodo = (event) =>{
        event.preventDefault();
        const name = todoNameRef.current.value
        if(name === "") return
        setTodos( prevTodos => {
                return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
            }

        )
        todoNameRef.current.value = null
    }

    const toggleTodo = (id) =>{
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    useEffect(() => {

        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(storedTodos) setTodos(storedTodos)
    }, []);

    useEffect(() => {

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos]);

    const clearAll = () => {

        window.localStorage.clear();
        window.location.reload(false);

    }

    return (
      <div className="App">
          <h1>My to do's</h1>
          <div className="form">
              <form>
                  <input ref={todoNameRef} type="text" name="todo"/>
                  <button onClick={addTodo} type="submit" className="button">Submit</button>
              </form>
          </div>
          <SvgMiddle />
          <Todolist todos={todos} toggleTodo={toggleTodo}/>
          <div className="cleardiv">
              <button type="submit" className="button clear" onClick={clearAll}>Clear All</button>
          </div>
          <SvgEnd />
      </div>
  );
}

export default App;
