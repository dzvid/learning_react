import React, { Component } from 'react';

import api from "../../services/api";

export default class Main extends Component{

    //Creating a state (it is always an object)
    state = {
        products: []
    }

    componentDidMount(){
        this.loadProducts();
    }

    //Methods that are not from react need to be made using arrow functions
    //The arrow function doesnt overwrite the refence of the this (it is referencing the react)
    loadProducts = async () => {
        //Acessing the api
        try{
            const response = await api.get(`/products`);
            
            console.log(response.data.docs);
        
            //Method to update the state object
            this.setState({ products: response.data.docs });
        }catch(err){
            console.log('Could not access the API!');
        }


    }
    //The render is always "listening" to changes in the state (object)
    //And if there is a change, it updates the components   
    render(){
        return (
            <div className="product-list">
                { this.state.products.map(product => (
                    <h2 key={ product._id }>{ product.title }</h2>
                )) }
            </div>
        );
    }
}