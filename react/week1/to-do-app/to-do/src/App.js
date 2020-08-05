import React from 'react';
import {ToDo}  from './Runder';
import './App.css';

function App() {
  let listToDo = [{title : "Writ homework",description : "Writ my React first week home work"},{title : "Clean my room",description : "clean under the bed and clean floor"}]
  return (
      <ToDo list = {listToDo}/>  
  );
}
export default App;
