import React , {Component} from 'react';
export class Timer extends Component  {
    constructor(){
        super();
        this.state = {
            secound : 0,
            minuts : 0,
            houer : 0
        }
        this.timeOnPage = this.timeOnPage.bind(this);
    }
    timeOnPage(){
        setInterval(()=>{
         let secound1 = this.state.secound +1;
         let minuts1 = this.state.minuts;
         let houer1 = this.state.houer;
         if ( this.state.secound ===59){
            secound1 =   0;
            minuts1 = minuts1 + 1;
             if (minuts1 ===60){
                 minuts1 =0 ; 
                houer1 = houer1+1;
             }
             
         }
         this.setState({
             secound : secound1 ,
            minuts : minuts1,
            houer : houer1});
        },1000)
    }
    componentDidMount() {
        console.log("Mount");
        this.timeOnPage();
    }

    render(){
    return (<h1 className ="timer">{this.state.houer}:{this.state.minuts}:{this.state.secound}</h1>)
    }
    
}