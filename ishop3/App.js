"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import ProductsBlock from './components/ProductsBlock';


let titleText = 'Список товаров';
let headerTable = require('./header.json');
let productsArr = require('./products.json');


ReactDOM.render(
  <ProductsBlock 
    title = {titleText}
    header = {headerTable}
    products={productsArr}    
    startWorkMode={1}
  />
  , document.getElementById('container') 
);
