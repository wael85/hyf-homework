import React, { useState, useEffect } from 'react';


export function Repo({props}){
    const url = props.url;
    const [repos , setRepo] = useState([]);
    //const[loading , setLoading] = useState(true);
    //const [error , setError] = useState('');
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then (res =>{console.log(res); setRepo(res)})
        .catch(error => {console.log(error)});
    },[url]);
  
    
    return(
        
        <>
            {repos && repos.map((repo , index)=>
              <li key = {index} className ="repo">
                  <h4 className = 'repo-name'>{repo.name}</h4> 
              </li>
            )}
        </>
         
        
    )
} 