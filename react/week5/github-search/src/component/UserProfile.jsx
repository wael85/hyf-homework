import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import '../UserProfile.css';
import {Repo} from './RepoFetch';

export function UserProfile (){
    const {userLogin} = useParams();
    const[loading , setLoading] = useState(true);
    const [error , setError] = useState('')
    const [userObj , setUser] = useState([]);
    useEffect(()=>{
        fetch(`https://api.github.com/users/${userLogin}`)
        .then(res => res.json())
        .then (res => {setLoading(false) ;setUser(res);console.log(res);})
        .catch(error => {setLoading(false) ; setError(error)});
        
    },[userLogin])
   
    if (loading) {
            return <p>loading..</p>;
          }
        
    if (error !== '') {
            return <p>ERROR: {error}</p>;
          }
    return(
       <main>
           <aside>
               <img src={`${userObj.avatar_url}`} alt="" className="profile-img"/>
               {userObj.name && <h2>{userObj.name}</h2>}
               <h3>{`Login : ${userObj.login}`}</h3>
               {userObj.bio && <p className = "bio">{userObj.bio}</p>}
               
           </aside>
           <div className="repos">
              <ul className= "repos-list">
                <Repo props = {{'url': userObj.repos_url} }/> 
              </ul>
                
              
           </div>
       </main>
    )
}