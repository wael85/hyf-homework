import React from "react";
import "./styles.css";
import {AddToList} from "./addtolist";
import { CounterS } from "./Counter";
const todos = [
  {
    id: 1,
    description: "Get out of bed"
  },
  {
    id: 2,
    description: "Brush teeth"
  },
  {
    id: 3,
    description: "Eat breakfast"
  }
];

export default function App() {
  return (
    <div className="App">
      <h1>To DO LIST</h1>
      <CounterS />
      < AddToList arr= {todos}/>
      
    </div>
  );
}
 
