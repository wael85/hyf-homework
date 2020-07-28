import React, { Component } from 'react';
export class ToDo extends Component {
  render() {
    const list =this.props.list;
    return(
      <div>
        <h1>My List :</h1>
        <ul className ="ulClass">
           
           { list.map((el , index)=> {
             return(
             <li key={index}><h3>{el.title}:</h3> {el.description}</li>
             )             
            })
              
            }
        </ul> 
      </div>
         
           
    
    );
   }  

}
