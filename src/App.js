import React from "react";
import './App.css';

//components
import Form from "./components/Form";
import Todolist from "./components/Todolist";


function App() {
  return (
      <div className="App">
          <h1>My to do list</h1>
          <Form />
          <Todolist />
      </div>
  );
}

export default App;
