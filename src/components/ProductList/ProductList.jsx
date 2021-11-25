import React from 'react';
import './productlist.css';
import Product from "../Product/Product";
import {products} from "../../data";


const ProductList = () => {
    return (
       <div className="pl">
           <div className="pl-texts">
               <h1 className="pl-title">Create and inspire</h1>
               <p className="pl-desc">
                   Alexa is developer... 
               </p>
           </div>
           <div className="pl-list">
               {products.map((item) => (
                  <Product key={item.id} img={item.img} link={item.link} />
               ))}
           </div>
       </div>
    )
}

export default ProductList;