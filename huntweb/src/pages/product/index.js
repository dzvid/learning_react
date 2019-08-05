// Product component
import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Product extends Component {
    state = {
        product: {}
    };

    //Loads the product information in the component
    async componentDidMount(){
        //To access the routes parameters, you have to access the 'props' attribute
        const { id } = this.props.match.params;

        try {
            const response = await api.get(`/products/${id}`);

            this.setState({ product: response.data });
        }catch(err){
            console.error('Could not get product from the API!');
        }
    }

    render(){
        const { product } = this.state;

        return (
          <div className="product-info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>

            <p>
              URL: <a href={product.url}>{product.url}</a>
            </p>
          </div>
        );
    }
}