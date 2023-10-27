import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import './Products.css'

const Products = () => {
    return (
<>
    
    <section className="card-container">
        <section className="card">
          <img src="https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg" alt="" className='card-img' srcset="" />
          <div className="card-details">
            <h3 className="card-title"> Shoe</h3>
            <section className='card-reviews'>

           <AiFillStar/> <AiFillStar/> <AiFillStar/>

            </section>
          </div>
        </section>

        <section className="card-price">

            <div className="price">
                <del>$300</del>200
            </div>

            <div className="bag">
                
            </div>

        </section>
    </section>


</>
    );
};

export default Products;