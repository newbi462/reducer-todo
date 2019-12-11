import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

import { RenderToDo } from "./components/RenderToDo";
import { AddTodo } from "./components/AddTodo";

import { NotAddedContext } from "./contexts/NotAddedContext";

function App() {
  const [unAdded, setUnAdded] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <NotAddedContext.Provider value={[unAdded, setUnAdded]}>
          <RenderToDo />
          {/*<AddTodo /> use of a reducer brakes the components natuer of react*/}
        </NotAddedContext.Provider>




        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
