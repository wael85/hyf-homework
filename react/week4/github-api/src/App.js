import React ,{useState }from 'react';
import './App.css';
import Search from './SearchPar';
import RenderUsers from './RenderUsers';

function App() {
  const [user , setUser] = useState(null || '');
  
  return (
    <div className="App">
      <Search user = {user} setUser = {setUser}/>  
      <RenderUsers user = {user}/>
    </div>
  );
}

export default App;
