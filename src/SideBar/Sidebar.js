import React from 'react';
import Category from './Catergory/Category';
import Price from './Price/Price';
import Color from './Colors/Color';
import "./Sidebar.css"
const Sidebar = ({handleChange}) => {
    return (
        <div>
         
  <div className="sidebar">
    <div className="logo-container">
        <h1>Cart</h1>
    </div>

    <Category handleChange={handleChange} ></Category>
    <Price   handleChange={handleChange} ></Price>
    <Color  handleChange={handleChange}   ></Color>
  </div>




        </div>
    );
};

export default Sidebar;