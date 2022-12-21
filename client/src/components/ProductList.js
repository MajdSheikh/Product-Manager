import { useEffect, useState } from 'react'
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';
    
    const ProductList = (props) => {
        const {products, removeFromDom} = props;

// we don;t need to write this function here because it is already in the main (lifting)
        // useEffect(() => {
        //     axios.get('http://localhost:8000/api/product')
        //         .then(res => setProducts(res.data));
                
        // }, [])    

// we don't need to add this function here
        // const removeFromDom = productId => {
        //     setProducts(products.filter(product => product._id != productId))
        // }

        
// we removed this delete function from here and put it a new delete component so that we could use it both in the list and in the update component     
    // const deleteProduct= (productId) => {
    //     axios.delete('http://localhost:8000/api/product/' + productId)
    //         .then(res => {
    //             removeFromDom(productId)
    //         })
    //         .catch(err => console.error(err));
    // }
    
    return (
        <div>
            <h3>All Products:</h3>
            {products.map((product, idx) => {
                return (
                <p key={idx}>
                    <Link to={"/products/" + product._id}><ul>{product.title}</ul></Link>
                    |
                    <Link to={"/products/" + product._id + "/edit"}>Edit</Link> 
                    |
                    {/* <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button> */}
                        <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                </p>
                )
            })}
        </div>
    )
}
    
export default ProductList;

