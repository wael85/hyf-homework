import React , {useState} from 'react';
import {UserContext } from './UserContext';
export default function Search({setUser}){
    const {user} = React.useContext(UserContext);
    const [userT , setUserT] = useState(user);
    return(
        <div>
            <form onSubmit = {setUser(userT)}>
                 <input type="text" value = {user} onChange = {(e)=>setUserT(e.target.value)} />
            </form>
        </div>
    );
}