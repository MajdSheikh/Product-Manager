import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const { productId, successCallback } = props;
    

    // we pass an id prop in this component to be able to delete from both the back end and the frontend
    // axsios.delete (this is delete from the backend), and when this is successful, after the ".then res" we give it 
    // the callbackfunction that will delete from the front end, 
    // successCallBack function is passed through the props because it is passed from another component (ProductList)
    
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res=>{
                successCallback();
            })
    }
    
    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}

