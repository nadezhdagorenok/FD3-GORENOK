import React from 'react';
import PropTypes from 'prop-types';

import './ProductsHeader.css';

class ProductsHeader extends React.Component {

  static propTypes = {    
          productNumber: PropTypes.number.isRequired,
          productName: PropTypes.string.isRequired,
          productModel: PropTypes.string.isRequired,
          priceProduct: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          balance: PropTypes.number.isRequired,      
        
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