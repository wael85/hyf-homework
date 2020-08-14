import React, { Component  } from 'react';
import {CreatLi} from './CreateLi';
import {ReadInput} from './ReadInput.jsx'
import {Edit} from './Edit'
export class ToDo extends React.Component {
    constructor(){
        super();
        this.editLi = React.createRef();
        this.state = {
            list : [{
                "id": 1,
                "description": "Get out of bed",
                "created_date" : "2020-08-11",
                "edit" : false,
                "status" : true 
              },
              {
                "id": 2,
                "description": "Brush teeth",
                "created_date" : "2020-08-11",
                "edit" : false,
                "status" : true 
              },
              {
                "id": 3,
                "description": "Eat breakfast",
                "created_date" : "2020-08-11",
                "edit" : false,
                "status" : true 
              }]
        };
      this.handelDelet = this.handelDelet.bind(this);
      this.handelSubmit = this.handelSubmit.bind(this);
      this.handelEdit = this.handelEdit.bind(this);
      this.handel = this.handel.bind(this);
      
    }     
  handelDelet(place){
      const list = this.state.list
      //list.splice(place,1);
      list[place].status = null;
      this.setState({
          list : list
      })
     
  }
  handelSubmit(data){
    const newDo = {"id" : this.state.list.length +1,"description": data.description , "created_date" : data.createdDate ,"status" : true , "edit" : false }
    const nList = this.state.list;
    nList.push(newDo);
    this.setState({
        list : nList
    });
    console.log('this new list ',this.state.list )
  }
  handelEdit(data){
    //const newDo = {"id" : this.state.list.length +1,"description": data.description , "created_date" : data.createdDate ,"status" : true  }
    const nList = this.state.list;
    nList[data.index-1].description = data.description;
    nList[data.index-1].created_date = data.createdDate;
    nList[data.index-1].edit= false;
    this.setState({
        list : nList
    });
    console.log(nList);
    
  }
 handel(el){
    const d = this.state.list;
    d[el.id-1].edit =! d[el.id-1].edit;
    this.setState({
      list : d,
    });
   console.log(el);

 } 
  
   
  render() {
    const renderList = this.state.list;

    return(
      <div>
        <h1>My List :</h1>
        <ul className ="ulClass">
            <ReadInput handelSubmit = {this.handelSubmit}/>
           
           
           { renderList.map((el , index)=> {
             if (el.status === null){
               return
             }if(el.edit ===false){
               return(
                
              <li key={index} ref = {this.editLi}>                  
                  <CreatLi elt = {el} />
                  <button onClick = {()=>this.handelDelet(index)}>Delete </button>
                  
                  <button onClick = {()=>this.handel(el)}>Edit</button>
                  
              </li>
           )  }else{
             return(
              <>
                 <h3>{el.id}</h3>  
                 <Edit handelSubmit = {this.handelEdit} targetObj = {renderList[index]} />
               
              </>
              )
            
           }
                        
            })
              
            }
        </ul> 
      </div>
         
           
    
    );
   }  

}
// <button onClick = {()=>
//this.handelAddDo(renderList,this.handelSubmit)}>Add todo</button>