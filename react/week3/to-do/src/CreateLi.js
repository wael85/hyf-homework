import React, { Component  } from 'react';
export class CreatLi extends Component {
    constructor(){
        super();
        this.state = {
            classN : false
        };
      this.setClass = this.setClass.bind(this);
    }     
     setClass (){
         const classN = !this.state.classN;
         this.setState({
             classN : classN
         })
     }    
  render() {
    const elt =this.props.elt;
    const checkClass = this.state.classN;
    return(
      <>
        <h3>{elt.id}:</h3>
            <span  className ={`${checkClass ? `checked` : `` }` }>
               {elt.description} | {elt.created_date}<input type= "checkbox" onChange = {this.setClass}/>
            </span> 

      </>            
    )}  
}