import React , {useState , useEffect, useContext} from 'react';
import {UserContext } from './UserContext';

export default function RenderUsers(){
    const {user} = useContext(UserContext);
    const [usersList ,setUsersList] = useState([]);
    const [err ,setErr] = useState(null);
    const errorMes ={mes1 : '',mes2:''}
    useEffect(()=>{
    
      if(!user){
        return;
      }
      fetch(`https://api.github.com/search/users?q=${user}`)
      .then(res =>
        {if(!res.ok){
          errorMes.mes1 = res.statusText;
        return (setErr(errorMes))
        }else{
          return res.json()
        }
          
        })
      .then(res =>{setUsersList(res.items)}) 
      .catch((error)=>{
        errorMes.mes2 = error;
        return(setErr(errorMes)) ;
      })     
    },[user]);
    if (!user){
     return 'No users'
    }

    if (err){
    return (
      <>
       <p>{`Erorr 1 : ${err.mes1} `}</p>
       <p>{` Erorr2 :  ${err.mes2}`}</p>
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
                       <p key = {key}>{userObj.login}</p>
                    )
                }else{return false}
            } )}
        </div>
    )
}
//