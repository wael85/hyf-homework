import React, { Component  } from 'react';
import {CreatLi} from './CreateLi';
export class ToDo extends Component {
    constructor(){
        super();
        this.state = {
            deleteItem : false
        };
      
    }     
        
   
  render() {
    const list =this.props.list;
    return(
      <div>
        <h1>My List :</h1>
        <ul className ="ulClass">
            <button>Add todo</button>
           
           { list.map((el , index)=> {
               
             return(
                
             <li key={index}>
                  
               <CreatLi elt = {el} />
                 <button>Delete </button>
             </li>
             )             
            })
              
            }
        </ul> 
      </div>
         
           
    
    );
   }  

}