import React, { Component} from 'react'
import {Link, RouteComponentProps} from 'react-router-dom'
import Home from '../Home';


interface Dprops extends RouteComponentProps <{name:string}>{  
}

interface Dstate {
    data:any,   
    response:any,
    error:string |null,
    
}


export default class Details extends Component<Dprops,Dstate> {
    constructor(props:Dprops){
        super(props);
        this.state ={
         data:props.match.params,
         response:[],
         error:null
        }
        
        
    }

    getProductData =async()=>{
        if(this.state.data.id >20){
            const title ="No Data! Please Visit Home"
            this.setState({error:title});
        }else{
        const response = await fetch(`https://fakestoreapi.com/products/${this.state.data.id}`);
        const responsedata = await response.json();
        console.log(responsedata,"DATA")
        this.setState({response: responsedata});
        }
    }
    componentDidMount(){
        this.getProductData();
    }
    render() {
        
            if(this.state.error == null){
                
                return (
            
                    <div className="container">
                      
                     
                      <div className="row" >
                      <div className="col"></div>
                      <div className="col-6 " >
                          
                         <h1 className="details">Details</h1> 
                        {/* <h1>{this.state.data.id}</h1> */}
                      <img className="imagedv" alt="img" src={this.state.response.image} />
                      <h5> {this.state.response.title} </h5>
                       
                       <p>{this.state.response.description}</p>
                     <b> <p>Price:{this.state.response.price}</p> </b>
                      </div>
                      <div className="col"></div>
                      </div>
                      
                    
                  
                    </div>
                )
            }else{

                return(
                    <div>
                        <h1 className="imagedv">No Data</h1>
                        
                    </div>
                )
            }

        
     
    }
}
