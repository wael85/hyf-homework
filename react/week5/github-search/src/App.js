import React ,{useState }from 'react';
import './App.css';
import {About} from './component/About'
import {UserProfile} from './component/UserProfile'
import RenderUsers from './component/RenderUsers';
import {UserContext} from './component/UserContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [user , setUser] = useState('');
  
  return (
    <div className="App">
      
      <Router>
       <UserContext.Provider value = {{user : user}} > 
        <div>
          <nav>
              <ul className="head-list">
                <li className="nav-items">
                  <Link to = "/" className = "nav-bar">
                     Home
                  </Link>
                </li>
                <li className="nav-items">
                  <Link to = "/about" className = "nav-bar">
                     About
                  </Link>
                </li>
              </ul>   
          </nav>
          <Switch>
            <Route path="/users/:userLogin"> 
               <UserProfile/>
            </Route>
            <Route path="/about">
               <About/>
            </Route>
            <Route path = "/">
              <h1>Github user searcher</h1>
              <div>
                <form >
                   <input type="text" value = {user} onChange = {(e)=>setUser(e.target.value)} />
                </form>
                </div>                
              <RenderUsers />      
            </Route>
          </Switch>
        </div>
        </UserContext.Provider >
      </Router>
      
    </div>
  );
}

export default App;
