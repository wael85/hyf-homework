import React, { Component  } from 'react';
import {CreatLi} from './CreateLi';
export class ToDo extends Component {
    constructor(){
        super();
        this.state = {
            list : [{
                "id": 1,
                "description": "Get out of bed"
              },
              {
                "id": 2,
                "description": "Brush teeth"
              },
              {
                "id": 3,
                "description": "Eat breakfast"
              }]
        };
      this.handelDelet = this.handelDelet.bind(this);
      this.handelAddDo = this.handelAddDo.bind(this);
    }     
  handelDelet(place){
      const list = this.state.list
      list.splice(place,1);
      this.setState({
          list : list
      })
     
  }
  handelAddDo(list){
    const newDo = {"id" : list.length +1,"description": "Random Text"  }
    const nList = this.state.list;
    nList.push(newDo);
    this.setState({
        list : nList
    })
  }
   
  render() {
    const renderList = this.state.list;
    return(
      <div>
        <h1>My List :</h1>
        <ul className ="ulClass">
            <button onClick = {()=>this.handelAddDo(renderList)}>Add todo</button>
           
           { renderList.map((el , index)=> {
             return(
                
                <li key={index}>                  
                    <CreatLi elt = {el} />
                    <button onClick = {()=>this.handelDelet(index)}>Delete </button>
                </li>
             )             
            })
              
            }
        </ul> 
      </div>
         
           
    
    );
   }  

}