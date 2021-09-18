import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles/styles.css'

export interface State{
    response: ResponseData[];
}
interface Props{

}
export interface ResponseData {
    id: number;
    price: number;
    title: string;
    image: string;
  }

export default class Home extends Component<Props,State> {
    constructor(props:Props){
super(props);
this.state={
    response:[]
}

    }
    getProductData =async()=>{
        const response = await fetch('https://fakestoreapi.com/products/');
        const responsedata = await response.json();
        this.setState({
            response: responsedata,
          });
        console.log(responsedata,"DATA");
    }
    componentDidMount(){
        this.getProductData();
    }
    render() {
        const { response } = this.state;

    if (response.length === 0) {
      return <div className="loader">Loader........</div>;
    }
    
        return (
          <>
          <div className="container">
          <div className="product-list">
            {response.map((resp) => (
                 
              <div className="product-cards" key={resp.id}>
               <Link style={{ textDecoration: 'none' }} to={`/details/${resp.id}`} >
                <img alt="img" src={resp.image} /> 
                <div className="product-description">{resp.title}</div>
                
                <b><div className="product-price">Price:{resp.price}</div> </b>
                </Link>
               
              </div>
             
            ))}
          </div>
        </div>
        </>
        )
    }
}
