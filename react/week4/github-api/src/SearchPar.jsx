import React , {useState} from 'react';

export default function Search({user , setUser}){
    const [userT , setUserT] = useState(user);
    return(
        <div>
            <form onSubmit = {setUser(userT)}>
                 <input type="text" value = {user} onChange = {(e)=>setUserT(e.target.value)} />
            </form>
        </div>
    );
}