import React , {useState , useEffect, useContext} from 'react';
import {UserContext } from './UserContext';
import { Link } from 'react-router-dom';

export default function RenderUsers(){
    const {user} = useContext(UserContext);
    const [usersList ,setUsersList] = useState([]);
    const [error ,setError] = useState(null);
    useEffect(()=>{
    
      if(!user){
        return;
      }
      fetch(`https://api.github.com/search/users?q=${user}`)
      .then(res =>
        {if(!res.ok){
        return (setError(res.statusText))
        }else{
          setError(null);
          return res.json();
        }
          
        })
      .then(res =>setUsersList(res.items)) 
      .catch(error => console.log ('render error :', error))    
    },[user]);
    if (!user){
     return 'No users'
    }

    if (error){
    return (
      <>
       <p>{`Erorr  : ${error} `}</p>
      </> 
    );
    }
    if(usersList && usersList.length === 0){
      return 'Loding...'
    }
    return(
        <div>
            {usersList.map((userObj,key)=>{
                if( userObj.login.substring(0,user.length) === user ){
                    return (
                      <Link to = {`/users/${userObj.login}`}  key = {key}><p >{userObj.login}</p></Link> 
                    )
                }else{return false}
            } )}
        </div>
    )
}
//