import React from 'react';
import PropTypes from 'prop-types';

import './ProductsHeader.css';

class ProductsHeader extends React.Component {

  static propTypes = {    
          productNumber: React.PropTypes.number.isRequired,
          productName: React.PropTypes.string.isRequired,
          productModel: React.PropTypes.string.isRequired,
          priceProduct: React.PropTypes.string.isRequired,
          url: React.PropTypes.string.isRequired,
          balance: React.PropTypes.number.isRequired      
        
  };
  
  render() {
    
    return (
       <div className='ProductsHeader'>
          <span className='ProductNumber'>{this.props.productNumber}</span>
          <span className='ProductName'>{this.props.productName}</span>
          <span className='ProductModel'>{this.props.productModel}</span>
          <span className='PriceProduct'>{this.props.priceProduct}</span>
          <span className='Url'>{this.props.url}</span>
          <span className='Balance'>{this.props.balance}</span>
       </div>
    )
};
  

}

export default ProductsHeader;