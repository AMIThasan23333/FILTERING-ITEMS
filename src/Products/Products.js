import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import './Products.css'
import Card from '../Components/Card';

const Products = ({result}) => {
    return (
<>
    
    <section className="card-container">
       {result}
    </section>


</>
    );
};

export default Products;