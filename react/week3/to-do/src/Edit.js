import React ,{Component} from 'react';

export class Edit extends Component{
    constructor(props){
        super(props);
        this.state = {
            index : this.props.targetObj.id,
            description : this.props.targetObj.description,
            createdDate : this.props.targetObj.created_date,
            
        }
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    } 
    

    handleChange1(e) {
        this.setState({
           description : e.target.value,
        });
    }
    
    handleChange2(e) {
        this.setState({
         createdDate: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newObj = this.state;
        this.props.handelSubmit(newObj);
        
    }
   render(){
     let today = new Date();
       return(
        <form onSubmit={this.handleSubmit}>
          <input type = "text" name ="description" value = {this.state.description}  onChange = {this.handleChange1} required/>
          <input type = "date" name="createdDate" min = {today} value = {this.state.createdDate} onChange = {this.handleChange2} required min = {today.toISOString().substr(0,10)} />
          <button type = "submit">Submit</button>
       </form>)
        
   }
}
