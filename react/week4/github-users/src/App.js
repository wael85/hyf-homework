import React ,{useState }from 'react';
import './App.css';
import Search from './SearchPar';
import RenderUsers from './RenderUsers';
import {UserContext} from './UserContext';

function App() {
  const [user , setUser] = useState('');
  
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
