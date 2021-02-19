import React, {useState, useRef, useEffect} from "react";
import './App.css';
import {v4 as uuidv4} from "uuid";

//components

import Todolist from "./components/Todolist";
import SvgEnd from "./components/SvgEnd";
import SvgMiddle from "./components/SvgMiddle";
import EmptyMessage from "./components/EmptyMessage";


//



function App() {

    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef();
    const LOCAL_STORAGE_KEY = 'todosApp.todos'

    console.log(todos)

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

    const clearComplete = () => {

        const stillTodo = [...todos].filter(todo => todo.complete === false)
        setTodos(stillTodo);

    }

    const clearAll = () => {

        const clearAll = [];
        setTodos(clearAll)

    }



    return (
      <div className="App">
          <h1>My to do's</h1>
          <div className="form">
              <form>
                  <input ref={todoNameRef} type="text" name="todo"/>
                  <button onClick={addTodo} type="submit" className="button">Add</button>
              </form>
          </div>
          <SvgMiddle />
          <Todolist todos={todos} toggleTodo={toggleTodo}/>
          <EmptyMessage todos={todos} />
          <div className="cleardiv">
              <button type="submit" className="button clear" onClick={clearComplete}>Complete</button>
              <button type="submit" className="button clear" onClick={clearAll}>Clear All</button>
          </div>
          <SvgEnd />
      </div>
  );
}

export default App;
