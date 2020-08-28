import React ,{useState }from 'react';
import './App.css';
import Search from './component/SearchPar';
import RenderUsers from './component/RenderUsers';
import {UserContext} from './component/UserContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [user , setUser] = useState(null || '');
  
  return (
    <div className="App">
      <h1>Github user searcher</h1>
      <UserContext.Provider value = {{user : user}} >
         <Search  setUser = {setUser}/>  
         <RenderUsers />
      </UserContext.Provider >
      
    </div>
  );
}

export default App;
