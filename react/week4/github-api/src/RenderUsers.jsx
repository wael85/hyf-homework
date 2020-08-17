import React , {useState , useEffect} from 'react';

export default function RenderUsers({user}){
    const [usersList ,setUsersList] = useState([]);
    useEffect(()=>{
      if(!user){
        return;
      }
      fetch(`https://api.github.com/search/users?q=${user}`)
      .then(res => res.json())
      .then(res =>{setUsersList(res.items)});
    
    },[user])
    if (!user){
          return 'No users'
    }
    if(usersList.length === 0){
      return 'Loding...'
    }


    return(
        <div>
            {usersList.map((userObj,key)=>{
                if( userObj.login.substring(0,user.length) === user ){
                    return (
                    <p key = {key}>{userObj.login}</p>
                    )
                }
            } )}
        </div>
    )
}