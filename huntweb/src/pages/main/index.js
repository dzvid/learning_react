import React, { Component } from 'react';
import api from "../../services/api";
import { Link } from 'react-router-dom';

import "./styles.css";

export default class Main extends Component{

    //Creating a state (it is always an object)
    state = {
        products: [],
        productInfo: {},
        page: 1
    };

    componentDidMount(){
        this.loadProducts();
    }

    //Methods that are not from react need to be made using arrow functions
    //The arrow function doesnt overwrite the refence of the this (it is referencing the react)
    loadProducts = async (page = 1) => {
        //Acessing the api
        try{
            const response = await api.get(`/products?page=${ page }`);

            const { docs, ...productInfo } = response.data;
            
            //Method to update the state object
            this.setState({ products: docs, productInfo, page });
        }catch(err){
            console.error("Could not access the API!");
        }


    }

    // Function to load the next page of products
    nextPage = () => {
        const { page, productInfo } = this.state;

        //Is actual page equals to the last page, does nothing
        if(page === productInfo.pages) return;

        //If it isnt the last page, goes to the next
        const pageNumber = page + 1;

        //Loads the next page
        this.loadProducts(pageNumber);
    }
    
    // Function to load the previous page of products
    prevPage = () => {
        const { page } = this.state;

        //Check if actual page equals to the first page, if it is then does nothing        
        if (page === 1) return;

        //If it isnt the first page, goes to the previous page        
        const pageNumber = page - 1; 

        //Loads the previous page
        this.loadProducts(pageNumber);

    }


    //The render is always "listening" to changes in the state (object)
    //And if there is a change, it updates the components   
    render(){

        const { products, page, productInfo } = this.state;

        return (
          <div className="product-list">
            {products.map(product => (
              <article key={product._id}>
                <strong>{product.title}</strong>
                <p>{product.description}</p>

                <Link to={`/products/${product._id}`}>Acessar</Link>
              </article>
            ))}
            <div className="actions">
              <button disabled={ page === 1 } onClick={this.prevPage}>Anterior</button>
              <button disabled={ page === productInfo.pages } onClick={this.nextPage}>Próxima</button>
            </div>
          </div>
        );
    }
}