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
       <ToDo list = {[
  {
    "id": 1,
    "description": "Get out of bed"
  },
  {
    "id": 2,
    "description": "Brush teeth"
  },
  {
    "id": 3,
    "description": "Eat breakfast"
  }
]} />
     </div>
    </div>
  );
}

export default App;
