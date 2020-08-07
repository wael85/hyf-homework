import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Timer} from './Timer';
import {ToDo} from './ToDo'
function App() {
  return (
    <div className="App">
     <h3>You spent <Timer/> on this page.</h3> 
     <div>
       <ToDo />
     </div>
    </div>
  );
}

export default App;
