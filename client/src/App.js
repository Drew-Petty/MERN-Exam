import './App.css';
import React from 'react'
import {Router} from '@reach/router'
import Main from './views/Main'
import New from './views/New'

function App() {
  return (
    <div className="App">
      <h1>Project Manager</h1>
      <Router>
        <Main path="/"/>
        <New path="/projects/new"/>
      </Router>
    </div>
  );
}

export default App;
