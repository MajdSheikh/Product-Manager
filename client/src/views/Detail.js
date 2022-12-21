import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate } from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();


    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => console.error(res))
            .catch(err => console.error(err));
        navigate("/products/");
    }
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id )
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <div>
                <Link to={"/products/" + product._id + "/edit"}>Edit Product info</Link>
                <button onClick={(e) => { deleteProduct(product._id) }}>Delete</button>
            </div>
        </div>
        
    )
}
    
export default Detail;

